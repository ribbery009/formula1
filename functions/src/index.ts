import * as functions from "firebase-functions";
import { app } from "./app"
import { getDriversData, Myrand, saveDriversData } from './services'

//Get init datas
const data = getDriversData();

//Create numbers for driver's position
const arr = Myrand(21, 0)

for (let index = 0; index < arr.length; index++) {
    data[index].place = arr[index]+1;
}
saveDriversData(data)

app.listen(3005, () => {
    console.log('Listening on port 3005!!!!!!!!');

});



exports.app = functions.https.onRequest(app)

// app.get("/api/drivers", function (req, res) {

//     //Place code here
//     //used for receiving params
//     res.send("Success!")
// })
// export const helloWorld = functions.https.onRequest(("/api/drivers", response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
