// Server Setup
import 'express-async-errors';
import { json } from 'body-parser';
import * as express from 'express'
const cors = require('cors')({origin: true});
const app = express();

app.use(json());
app.use(cors);
app.get('/', (req, res) => res.status(200).send('Hey there!'))

export { app };

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });