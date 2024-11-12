import sql from ('../db/db');

const getAllEmployees = async() =>{
    try{
        const result = await sql`SELECT * FROM employee`;
    } catch(e){
        console.error('Error receiving employees', e);
    }
}