import axios from "axios";

export const getAllClients = async () => {
	try {
		const response = await axios.get(
			`http://localhost:5000/api/client/getAllClients`
		);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
