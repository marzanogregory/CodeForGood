export interface DashboardCol {
	id: "id" | "address" | "last_appointment" | "employee" | "next_appointment";
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}

export interface Dashboard {
	id: string;
	address: string;
	last_appointment: string;
	employee: string;
	next_appointment: string;
	latitude: number | null;
	longitude: number | null;
}


export {};