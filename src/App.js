import './App.css';
import './assets/css/style.css';
import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import LoginRegister from './components/LoginRegister';
import UserProfile from './components/UserProfile';
import Home from './pages/Home';
import SingleCoach from './pages/SingleCoach';
import SinglePackage from './pages/SinglePackage';
// import CoachesContext from './store/coaches-context';
import SingleMeal from './pages/SingleMeal';

function App() {
	// const { coachesState, setCoachesState } = useContext(CoachesContext);
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
					<Route path="/single-meal/:mealId">
						<SingleMeal></SingleMeal>
					</Route>
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
