import { useState } from 'react';
import React from 'react';
const AuthContext = React.createContext({
	//* ovo sluzi samo za autofill VS codu
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
});

export const AuthContextProvider = (props) => {
	const [token, setToken] = useState(null);
	const userIsLoggedIn = !!token;
	const loginHandler = (token) => {
		setToken(token);
	};
	const logoutHandler = () => {
		setToken(null);
	};
	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
	};
	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
