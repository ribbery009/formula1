import { Request, Response } from 'express';
import express = require("express");
import { updateDriversData } from '../services';
// import { getDriversData } from '../services';


const router = express.Router();

router.post('/api/drivers/:id/overtake', (req: Request, res: Response) => {
    const { from, to } = req.body;
  
    updateDriversData(from,to)
    res.send({ newArray: "Success" || null })
});


export { router as postOvertake };