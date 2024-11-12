import express from 'express';
import mapRoutes from './routes/mapRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}


const PORT = process.env.PORT || 5000; 
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/map', mapRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/employee', employeeRoutes);


app.listen(PORT, () => {
    console.log(`App is listening on port http://localhost:${PORT}`);
})