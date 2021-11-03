import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react/cjs/react.development";
import avatar from "/Users/zarakious/Documents/All React/lorem-ipsum/src/components/img/zaraki.png";

const Login = ({
	isConnected,
	setIsConnected,
	displayUser,
	setDisplayUser,
	displayConnectForm,
	setConnectForm,
	handleDisplayConnect,
}) => {
	useEffect(() => {
		if (isConnected) {
			setConnectForm("none");
			setDisplayUser("");
		} else {
			setConnectForm("");
			setDisplayUser("none");
		}
	});
	return (
		<div>
			<div className="connected" style={{ display: displayUser }}>
				<div>
					<img className="login-logo" src={avatar} alt="user-logo" />
				</div>
				<div className="username">Username</div>
			</div>
			<div className="connect-form" style={{ display: displayConnectForm }}>
				<button onClick={handleDisplayConnect}>
					<FontAwesomeIcon icon={faSignInAlt} /> Login
				</button>
				<button>
					<FontAwesomeIcon icon={faUser} /> Create Account
				</button>
			</div>
		</div>
	);
};

export default Login;
