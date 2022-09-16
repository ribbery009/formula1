import * as functions from "firebase-functions";
// import {app} from "./app"


// app.listen(3005, () => {
//     console.log('Listening on port 3004!!!!!!!!');
//   });

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
