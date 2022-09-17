import React from "react";
import { useQueryClient } from 'react-query'
import {
    DragDropContext,
    Draggable,
    DraggingStyle,
    Droppable,
    DropResult,
    NotDraggingStyle
} from "react-beautiful-dnd";
import { toAbsoluteUrl } from "../../_formula1Page/helpers"
import { DriverModel } from "../components/core/_model";
import ReactCountryFlag from "react-country-flag"
import { useQueryResponseDrivers, useQueryResponseDriversData, useQueryResponseDriversLoading } from "../components/core/QueryResponseProvider";
import { overtake } from "../components/core/_requests";
import { Loading } from "../components/loading/loading";

// a little function to help us with reordering the result
const reorder = (
    list: DriverModel[],
    startIndex: number,
    endIndex: number
): DriverModel[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
): React.CSSProperties => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    boxShadow: "0 0 20px rgb(30 31 45 / 15%)",
    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    padding: grid,
    width: 300
});

export function Dashboard(): JSX.Element {
    // const [state, setState] = useState(defaultDrivers);

    const drivers = useQueryResponseDriversData();
    const driversLoading = useQueryResponseDriversLoading();
    const queryClient = useQueryClient();
    const { query } = useQueryResponseDrivers();
    const onDragEnd = async (result: DropResult): Promise<void> => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items: DriverModel[] = reorder(
            drivers,
            result.source.index,
            result.destination.index
        );

        const data = await overtake(Number(result.draggableId), result.source.index, result.destination.index);
        console.log("data: ", data)
        queryClient.invalidateQueries([`${query}`])

    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    return (
        <>
            {driversLoading && <Loading />}
            {!driversLoading &&
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot): JSX.Element => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {drivers.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id + ""} index={index}>
                                        {(provided, snapshot): JSX.Element => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <div className='d-flex align-items-center mb-7'>

                                                    {/* begin::Avatar */}

                                                    <div className='symbol symbol-50px me-5'>
                                                        <img src={toAbsoluteUrl(`/static/${item.code}.png`)} className='' alt='' />
                                                    </div>
                                                    {/* end::Avatar */}
                                                    {/* begin::Text */}
                                                    <div className='flex-grow-1'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            {item.firstname}{item.lastname}
                                                        </a>
                                                        <span className='text-muted d-block fw-bold'> {item.team}</span>
                                                    </div>

                                                    {/* end::Text */}
                                                    <div className='flex-grow-1 d-flex justify-content-end flex-column align-items-center'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            {item.id as number + 1}
                                                        </a>
                                                        <span className='text-muted d-block fw-bold'>  <ReactCountryFlag countryCode={item.country} svg /> </span>
                                                    </div>
                                                </div>

                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            }
        </>
    );
};