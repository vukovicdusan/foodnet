import { useEffect, useState } from 'react';
import React from 'react';
const AuthContext = React.createContext({
	//* ovo sluzi samo za autofill VS codu
	token: '',
	isLoggedIn: false,
	login: (token) => {},
	logout: () => {},
	kcalHandler: () => {},
});

export const AuthContextProvider = (props) => {
	const [token, setToken] = useState(() => {
		const localToken = localStorage.getItem('auth-token');
		return localToken ? JSON.parse(localToken) : null;
	});
	const [kcalAmount, setKcalAmount] = useState(() => {
		const userKcalAmount = localStorage.getItem('user-kcals');
		return userKcalAmount ? JSON.parse(userKcalAmount) : null;
	});

	const userIsLoggedIn = !!token;
	const loginHandler = (token) => {
		setToken(token);
	};

	const logoutHandler = () => {
		setToken(null);
	};

	const kcalHandler = (userKcal) => {
		setKcalAmount(userKcal);
	};

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
		kcalHandler: kcalHandler,
		kcalAmount: kcalAmount,
	};

	useEffect(() => {
		localStorage.setItem('auth-token', JSON.stringify(token));
	}, [token]);

	useEffect(() => {
		localStorage.setItem('user-kcals', JSON.stringify(kcalAmount));
	}, [kcalAmount]);

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
