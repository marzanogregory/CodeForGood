import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/useAuth";

interface Props {
	children: React.ReactNode;
}

const OppProtRoute = ({ children }: Props): JSX.Element => {
	const location = useLocation();
	const { isLoggedIn } = useAuth();

	return !isLoggedIn() ? (
		<>{children}</>
	) : (
		<Navigate to="/dashboard" state={{ from: location }} replace />
	);
};

export default OppProtRoute;
