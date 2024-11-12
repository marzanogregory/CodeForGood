import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Pages/firebase";

export const loginAPI = async (email: string, password: string) => {
	try {
		const result = await signInWithEmailAndPassword(auth, email, password);
		const user = result.user;
		user.getIdToken().then((token) => {
			localStorage.setItem("token", token);
		});
		localStorage.setItem("user", JSON.stringify(user.email));
	} catch (error) {
		throw error;
	}
};
