import sql from '../db/db.js';

//get the lat, long for all employees from db here
export const getAllEmployeePos = async() =>{
    try{
        const result = await sql`SELECT name, id, latitude, longitude FROM employees`;
        return result;
    } catch(e){
        console.error('Error receiving employee positions: ', e );
    }
}

//get the lat, long for all clients from db here
export const getAllClientPos = async() =>{
    try{
        const result = await sql`SELECT latitude, longitude FROM clients`;
        return result;
    } catch(e) {
        console.error('Error receiving client positions: ', e );
    }
}

//get the lat, long for client_id = clientID from db here
export const getClientPos = async(clientId) =>{
    try{
        const result = await sql`SELECT latitude, longitude FROM clients WHERE id = ${clientId}`;
        return result;
    } catch(e) {
        console.error('Error receiving client positions for requested client: ', e );
    }
}

 //get the lat, long for employee_id = employeeId from db here
export const getEmployeePos = async(id) =>{
    try{
        const result = await sql`SELECT latitude, longitude FROM employees WHERE id = ${id}`;
        return result;
    } catch(e) {
        console.error('Error receiving employee positions for requested employee: ', e );
    }
}

// UPDATE THE USER LAT, LONG HERE (every 10 sec from frontend
export const newEmployeePos = async(id, latitude, longitude) => {
    try{
        const result = await sql`UPDATE employees SET latitude = ${latitude}, longitude = ${longitude} WHERE id = ${id} RETURNING *`;
        console.log(result);
        return result;
    } catch (error) {
        console.log('Error updating user position:', error);
    }
}




