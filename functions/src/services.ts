import { Driver, DriverModel } from "./dataExamples";

const fs = require('fs');

export function Myrand(max: number, min: number) {
    const arr: number[] = []
    for (let i = 0; i < max; i++) {
        const x = Math.floor(Math.random() * max) + min;
        if (arr.includes(x) == true) {
            i = i - 1;
        } else {
            if (x > max == false) {
                arr.push(x);
            }
        }
    }
    return arr;
}

const dataPath = './drivers.json'

//get drivers from local json file
export function getDriversData() {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)
}

//update drivers to local json file
export function initDriversData(data: Array<DriverModel>) {
    const orderedData = orderByPosition(data)
    const stringifyData = JSON.stringify(orderedData)
    fs.writeFileSync(dataPath, stringifyData)
}

//save drivers to local json file
export function updateDriversData(from:number,to:number) {
    
    const data = getDriversData();
    
     const newArray = arrayMove(data, from, to)
     const stringifyData = JSON.stringify(newArray)

    fs.writeFileSync(dataPath, stringifyData)
}

//insert old item to new position 
export function arrayMove(arr:Array<DriverModel>, old_index : number, new_index : number) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
};


//Order items by position
const orderByPosition = (data: Array<DriverModel>) => {
    return data.sort((a,b) => (a as Driver).place > (b as Driver).place ? 1 : -1)
}