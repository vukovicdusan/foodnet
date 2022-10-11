import { useEffect, useReducer, useState } from 'react';
import React from 'react';
import authReducer from '../reducers/authReducer';

const currentUserInitState = {
	currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
};
export const AuthContext = React.createContext(currentUserInitState);

export const AuthContextProvider = (props) => {
	const [currentUserState, dispatch] = useReducer(
		authReducer,
		currentUserInitState
	);

	useEffect(() => {
		localStorage.setItem(
			'currentUser',
			JSON.stringify(currentUserState.currentUser)
		);
	}, [currentUserState.currentUser]);

	const contextValue = {
		currentUser: currentUserState.currentUser,
		dispatch,
	};
	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
