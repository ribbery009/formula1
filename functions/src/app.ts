// Server Setup
import 'express-async-errors';
import { json } from 'body-parser';
import * as express from 'express';
import { getDrivers } from './routes/get-drivers';
import { postOvertake } from './routes/overtake';

const cors = require('cors')({ origin: true });
const app: express.Application = express();

app.use(json());
app.use(cors);
app.use(getDrivers);
app.use(postOvertake);
app.get('/', (req, res) => res.status(200).send('Hey there!'))

export { app };