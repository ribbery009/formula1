import * as functions from "firebase-functions";
import { app } from "./app"
import { getDriversData, initDriversData, Myrand } from './services'


export const PORT_NUMBER = 3005
//Get init datas
const data = getDriversData();

//Create numbers for driver's position
const arr = Myrand(21, 0)

//Added generated position to drivers
for (let index = 0; index < arr.length; index++) {
    data[index].place = arr[index]+1;
}
  initDriversData(data)

app.listen(PORT_NUMBER, () => {
    console.log(`Listening on port ${PORT_NUMBER}!!!!!!!!`);

});



exports.app = functions.https.onRequest(app)

// app.get("/api/drivers", function (req, res) {

//     //Place code here
//     //used for receiving params
//     res.send("Success!")
// })

