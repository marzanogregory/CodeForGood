import { useEffect, useState } from "react";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from "@mui/material";
import { Dashboard, DashboardCol } from "../../Models/Dashboard";
import { getAllClients } from "../../Services/DashboardService";

const columns: readonly DashboardCol[] = [
	{ id: "id", label: "ID", minWidth: 170 },
	{ id: "address", label: "Address", minWidth: 100 },
	{ id: "last_appointment", label: "Last Appointment", minWidth: 100 },
	{ id: "next_appointment", label: "Next Appointment", minWidth: 100 },
	{ id: "employee", label: "Employee", minWidth: 100 },
];

export const StickyHeadTable = () => {
	const [page, setPage] = useState<number>(0);
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);
	const [rows, setRows] = useState<Dashboard[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getCli = async (): Promise<void> => {
			const res = await getAllClients();
			setRows(
				res.map((item: any) => ({
					...item,
					last_appointment:
						item.last_appointment === "null"
							? "N/A"
							: item.last_appointment,
					next_appointment:
						item.next_appointment === "null"
							? "N/A"
							: item.next_appointment,
					employee:
						item.employee === "null"
							? "N/A"
							: item.employee,
				}))
			);
	
			setIsLoading(false);
		}
		setIsLoading(true);
		getCli();
	}, []);


	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		isLoading ? <div>Loading...</div> :
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
							)
							.map((row) => {
								return (
									<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={row.id}
									>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell
													key={column.id}
													align={column.align}
												>
													{column.format &&
													typeof value === "number"
														? column.format(value)
														: value}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 20]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
