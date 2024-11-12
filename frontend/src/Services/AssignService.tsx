import axios from "axios";

export const getAllAssign = async () => {
	try {
		const response = await axios.get(
			`http://localhost:5000/api/client/clientsNoStaff`
		);
        console.log(response);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
