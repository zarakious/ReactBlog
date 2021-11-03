import React, { useState, useEffect } from "react";

const Connect = ({
	users,
	isConnected,
	setIsConnected,
	displayConnectForm,
	setConnectForm,
}) => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const handleLoginform = (e) => {
		setLogin(e.target.value);
	};
	const handlePasword = (e) => {
		setPassword(e.target.value);
	};

	useEffect(() => {
		if (isConnected) {
			setConnectForm("none");
		} else {
			setConnectForm("");
		}
	}, [isConnected]);

	const handleConnection = (e) => {
		e.preventDefault();
		console.log(login);
		console.log(password);
		let countUsers = users.map(
			(element) => element.username === login && element.password === password
		);
		if (countUsers.includes(true)) {
			console.log("succesfully connected");
			setIsConnected(true);
		} else {
			console.log("Failed to connect");
			setIsConnected(false);
		}
	};
	return (
		<div className="login-wrapper" style={{ display: displayConnectForm }}>
			<div className="connection">
				<form action="post" className="login-form">
					<h4>Connect To your account </h4>
					<input
						value={login}
						onChange={handleLoginform}
						type="text"
						placeholder="Login"
					/>
					<input
						value={password}
						onChange={handlePasword}
						type="password"
						placeholder="Password"
					/>
					<button onClick={handleConnection} className="login-button ">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Connect;
