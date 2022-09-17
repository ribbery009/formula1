import axios, {AxiosResponse} from 'axios'
import {DriversQueryResponse} from './_model'

const FIREBASE_BACKEND_URL = process.env.REACT_APP_API_URL
const LOCALHOST_URL = "http://localhost:3005"
export const GET_DRIVERS_URL = `${window?.location?.hostname != "localhost" ? FIREBASE_BACKEND_URL : LOCALHOST_URL}/api/drivers`

const getDrivers = (): Promise<any> => {
  return axios
    .get(`${GET_DRIVERS_URL}`)
    .then((d: AxiosResponse<DriversQueryResponse>) => d.data.drivers)
}

export function overtake(id:number,from:number,to:number) {
  return axios.post(GET_DRIVERS_URL+"/"+id+"/overtake",{from,to})
}


export {getDrivers}