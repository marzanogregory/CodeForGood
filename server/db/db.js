// intializing database connection
import postgres from 'postgres';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString);

export default sql

// use [import sql from './db.js'] to use queried data  
