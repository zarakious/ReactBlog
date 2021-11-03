import React from "react";
import logo from "/Users/zarakious/Documents/All React/lorem-ipsum/src/components/img/blog.svg";
import Login from "./Login";

const Header = ({
	isConnected,
	setIsConnected,
	displayUser,
	setDisplayUser,
	displayConnectForm,
	setConnectForm,
}) => {
	const handleDisplayConnect = (e) => {
		setConnectForm("");
	};
	return (
		<div className="header-wrapper">
			<div className="navigation-container">
				<div className="box-logo">
					<img className="logo" src={logo} alt="logo" />
				</div>
				<div className="navigation">
					<div>Home</div>
					<div>Favorites</div>
					<div>Contact</div>
				</div>
			</div>
			<div className="user-profile">
				<Login
					isConnected={isConnected}
					setIsConnected={setIsConnected}
					displayUser={displayUser}
					setDisplayUser={setDisplayUser}
					displayConnectForm={displayConnectForm}
					setConnectForm={setConnectForm}
					handleDisplayConnect={handleDisplayConnect}
				/>
			</div>
		</div>
	);
};

export default Header;
