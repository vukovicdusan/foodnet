import React, { useState, useEffect } from 'react';

const CoachesContext = React.createContext({});

export const CoachesContextProvider = (props) => {
	const [coachesState, setCoachesState] = useState(() => {
		const localData = localStorage.getItem('coaches');
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		try {
			const fetchCoaches = async () => {
				const response = await fetch(
					'https://food-net-auth-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
				);
				if (!response.ok) {
					throw new Error('Error!');
				}
				const responseData = await response.json();

				const loadedCoaches = [];
				for (const key in responseData) {
					loadedCoaches.push({
						id: key,
						name: responseData[key].name,
						type: responseData[key].type,
						image: responseData[key].image,
						price: responseData[key].price,
						gender: responseData[key].gender,
					});
				}
				setCoachesState(loadedCoaches);
			};
			fetchCoaches();
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('coaches', JSON.stringify(coachesState));
	}, [coachesState]);

	return (
		<CoachesContext.Provider value={{ coachesState, setCoachesState }}>
			{props.children}
		</CoachesContext.Provider>
	);
};

export default CoachesContext;
