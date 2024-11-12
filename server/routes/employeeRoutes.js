import { Router } from 'express';
const router = Router();

router.get('/getAllEmployees', async (req, res) => {
    try {
        //get the  for all employees from db here
        res.send({status:'wOrks'});
    }
    catch (err){
        res.status(500).json({error: `The error is ${err}`});
    }
})

export default router;