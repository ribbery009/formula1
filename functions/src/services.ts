const fs = require('fs');

export function Myrand(max: number, min: number) {
    const arr : number[] = []
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
export function getDriversData(){
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)
}

//save drivers to local json file
export function saveDriversData(data: any){
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}