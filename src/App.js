import './App.css';
import './assets/css/style.css';
import { Fragment, useContext, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';
import UserProfile from './components/UserProfile';
import Home from './pages/Home';
import SingleCoach from './pages/SingleCoach';
import SinglePackage from './pages/SinglePackage';
import CoachesContext from './store/coaches-context';

function App() {
	const { coachesState, setCoachesState } = useContext(CoachesContext);
	// useEffect(() => {
	// 	try {
	// 		const fetchCoaches = async () => {
	// 			const response = await fetch(
	// 				'https://food-net-auth-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
	// 			);
	// 			if (!response.ok) {
	// 				throw new Error('Error!');
	// 			}
	// 			const responseData = await response.json();

	// 			const loadedCoaches = [];
	// 			for (const key in responseData) {
	// 				loadedCoaches.push({
	// 					id: key,
	// 					name: responseData[key].name,
	// 					type: responseData[key].type,
	// 					image: responseData[key].image,
	// 					price: responseData[key].price,
	// 					gender: responseData[key].gender,
	// 				});
	// 			}
	// 			setCoachesState(loadedCoaches);
	// 		};
	// 		fetchCoaches();
	// 	} catch (error) {
	// 		console.log(error.message);
	// 	}
	// }, []);
	return (
		<Fragment>
			<Route path="/" exact>
				<Redirect to="/home" exact />
			</Route>

			<Header></Header>
			<main>
				<Switch>
					<Route path="/login-register">
						<LoginRegister></LoginRegister>
					</Route>
					<Route path="/user-profile">
						<UserProfile></UserProfile>
					</Route>
					<Route path="/home" exact>
						<Home></Home>
					</Route>
					<Route path="/single-coach/:coachId">
						<SingleCoach></SingleCoach>
					</Route>
					<Route path="/single-package">
						<SinglePackage></SinglePackage>
					</Route>
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
