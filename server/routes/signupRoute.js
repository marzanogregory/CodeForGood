import { Router } from 'express';
import * as model from '../models/SignUp.js';

const router = Router();

router.get('/createClient', async (req, res) => {
    try {
        const pos = await model.createClient();
        res.json(pos);
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

