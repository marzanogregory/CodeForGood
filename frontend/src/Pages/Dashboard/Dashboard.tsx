import React from "react";
import { StickyHeadTable } from "../../Components/DataTable/DataTable";
import "./Dashboard.css";

type Props = {};

const Dashboard = (props: Props) => {
	return (
		<>
			<div className="banner">
				<h3>
					<em>Lodestar is a light that guides the way.</em>
				</h3>
				<img
					src="https://cdn-icons-png.flaticon.com/512/3730/3730618.png"
					className="banner-image"
					alt="Lodestar icon"
				/>
			</div>
			<div>
				<StickyHeadTable />
			</div>
		</>
	);
};

export default Dashboard;
