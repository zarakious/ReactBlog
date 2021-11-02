import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.development";
import avatar from "/Users/zarakious/Documents/All React/lorem-ipsum/src/components/img/zaraki.png";

const Login = () => {
	const [isConnected, setIsConnected] = useState(false);
	return (
		<div>
			<div className="connected">
				<div>
					<img src={avatar} alt="user-logo" />
				</div>
				<div>Username</div>
			</div>
			<div className="connect-form">
				<button>
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
