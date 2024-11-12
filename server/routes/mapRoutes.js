import { Router } from 'express';
import * as Map from '../models/Map.js';

const router = Router();

router.get('/getAllEmployeesPos', async (req, res) => {
    try {
        const pos = await Map.getAllEmployeePos();
        res.json(pos);
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.get('/getAllClientsPos', async (req, res) => {
    //get the lat, long for all clients from db here
    try {
        const allClientsPos = await Map.getAllClientPos();
        res.json(allClientsPos);
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.get('/getClientPos/:id', async (req, res) => {
    try {
        //get the lat, long for client_id = clientId from db here
        const id = req.params.id;
        console.log(id);
        const client = await Map.getClientPos(id);
        res.json(client);
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.get('/getEmployeePos/:id', async (req, res) => {
    try {
        //get the lat, long for employee_id = employeeId from db here
        const id = req.params.id;
        const employee = await Map.getEmployeePos(id);
        res.json(employee);
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

router.put('/newEmployeePos', async (req, res) => {
    const { id, latitude, longitude } = req.body;

    try {  
        const user = await Map.newEmployeePos(id, latitude, longitude);
        res.json(user);
    } 
    catch (err) {
        res.status(500).json({error: `The error is ${err}`});
    }
})

export default router;