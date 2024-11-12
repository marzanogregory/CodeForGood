import sql from '../db/db.js';

// Function to create a new client in the database
export const createClient = async (authId, address, lastAppointment, nextAppointment, long, lat, name, employee) => {
    try {
        const result = await sql`
            INSERT INTO users(auth_id, address, last_appointment, next_appointment, long, lat, name, employee) 
            VALUES ${authId}, ${address}, ${lastAppointment}, ${nextAppointment}, ${long}, ${lat}, ${name}, ${employee} 
            RETURNING *`

        return result.rows[0]; // Returns the inserted row
    } catch (error) {
        console.error(`Error inserting data: ${error.message}`); // Log error
        return null; // Handle error gracefully
    }
};

export default createClient; // Export the function as default



