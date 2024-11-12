import axios from "axios";

export const getAllMapEmployees = async () => {
	try {
		const response = await axios.get(
			`http://localhost:5000/api/map/getAllEmployeesPos`
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const updateEmployeePos = async (
	id: string,
	latitude: string,
	longitude: string
) => {
	try {
		const response = await axios.put(
			`http://localhost:5000/api/map/newEmployeePos`,
			{
				id,
				latitude,
				longitude,
			}
		);
		return response.data;
	} catch (error) {
		console.error(error);
		// throw error;
	}
};
