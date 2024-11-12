import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useNavigate } from "react-router";
import { UserProfile } from "../Models/User";
import { loginAPI } from "../Service/LoginAPI";


type UserContextType = {
	user: UserProfile | null;
	token: string | null;
	loginUser: (username: string, passwordL: string) => any;
	logout: () => void;
	isLoggedIn: () => boolean;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<UserProfile | null>(null);
	const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
		const user = localStorage.getItem("user");
		const token = localStorage.getItem("token");
		if (user && token) {
			setUser(JSON.parse(user));
			setToken(token);
		}
		setIsReady(true);
	}, []);

	const loginUser = async (username: string, password: string) => {
		await loginAPI(username, password);
	};

	const isLoggedIn = () => {
		return user != null;
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setUser(null);
		setToken("");
		navigate("/");
	};

	return (
		<UserContext.Provider
			value={{
				loginUser,
				user,
				token,
				logout,
				isLoggedIn,
			}}
		>
			{isReady ? children : null}
		</UserContext.Provider>
	);
};

export const useAuth = () => useContext(UserContext);

