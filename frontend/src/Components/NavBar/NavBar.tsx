import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem,
	Container,
	Avatar,
	Button,
	Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../Context/useAuth";

const pages = ["Dashboard", "Providers", "Assign", "Documents"];
type Props = {};

const NavBar = (props: Props) => {
	const { isLoggedIn, logout } = useAuth();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return isLoggedIn() ? (
		<>
			<AppBar position="sticky">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Link to="">
							<img
								src={require("../../Assets/logo_noBG.png")}
								alt="logo"
							/>
						</Link>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{ display: { xs: "block", md: "none" } }}
							>
								{pages.map((page) => (
									<MenuItem
										key={page}
										onClick={handleCloseNavMenu}
									>
										<Typography
											sx={{ textAlign: "center" }}
										>
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
							}}
						>
							{pages.map((page, index) => (
								<Link
									to={`/${page.toLowerCase()}`}
									style={{ textDecoration: "none" }}
									key={index}
								>
									<Button
										key={page}
										sx={{
											my: 2,
											color: "white",
											display: "block",
										}}
									>
										{page}
									</Button>
								</Link>
							))}
						</Box>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ p: 0 }}
								>
									<Avatar
										alt="Remy Sharp"
										src="/static/images/avatar/2.jpg"
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<Link
									to={`/${"profile"}`}
									style={{ textDecoration: "none" }}
								>
									<MenuItem
										key={"profile"}
										onClick={handleCloseUserMenu}
									>
										<Typography
											sx={{ textAlign: "center" }}
										>
											{"profile"}
										</Typography>
									</MenuItem>
								</Link>

								<MenuItem key={"logout"} onClick={logout}>
									<Typography sx={{ textAlign: "center" }}>
										{"logout"}
									</Typography>
								</MenuItem>
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	) : (
		<></>
	);
};
export default NavBar;
