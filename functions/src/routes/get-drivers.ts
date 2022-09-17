import { Request, Response } from 'express';
import express = require("express");
import { getDriversData } from '../services';


const router = express.Router();

router.get('/api/drivers', (req: Request, res: Response) => {
    const data = getDriversData();
    res.send({ drivers: data || null })
});


export { router as getDrivers };