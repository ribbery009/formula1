export interface DriverModel {
    id: undefined | null | number
    code: string
    firstname: string
    lastname: string
    country: string
    team: string
    place: number
}

export type Response<T> = {
    drivers: T
}

export interface DriversObject {
    drivers: DriverModel[]
}

export type DriversQueryResponse = Response<DriversObject>