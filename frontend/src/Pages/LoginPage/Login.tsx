import React, { useState } from "react";
import "./Login.css";
import logo from "../../Assets/images/inverted.png";
import starstretch from "../../Assets/images/stars.png";
import { useAuth } from "../../Context/useAuth";
import { useNavigate } from "react-router-dom";


type Props = {};

const Login = (props: Props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { loginUser } = useAuth();
	const navigate = useNavigate();

	const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await loginUser(email, password);

		setEmail("");
		setPassword("");

		navigate("/dashboard");
	};

	return (
		<>
			<div className="sign-in-container">
		
				
				<img src={starstretch} alt="Stars" className="starstretch" />

				<img src={logo} alt="Company Logo" className="logo" />
				<form onSubmit={logIn}>
					<h1>Log In</h1>
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Log In</button>
				</form>
				<img src={starstretch} alt="Stars" className="starstretch2" />
				<p style={{color: "white", fontStyle: "italic"}}>Lodestar is a light that guides the way.</p>
			</div>


		</>
	);
};

export default Login;
