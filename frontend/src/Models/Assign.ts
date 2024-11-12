export interface AssignCol {
	id: "id" | "address" | "age" | "gender" | "language" | "employee_count";
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}
export interface AssignCol2 {
	id: "id" | "address" ;
	label: string;
	minWidth?: number;
	align?: "right";
	format?: (value: number) => string;
}


export interface Assign {
	id: string;
	address: string;
	age: number;
	gender: string;
	language: string;
	employee_count: number;
}

export interface AssignDoc {
	id: string;
	address: string;
}

export {};