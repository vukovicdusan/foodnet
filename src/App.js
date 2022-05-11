import './App.css';
import './assets/css/style.css';
import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
// import Hero from './components/Hero';
// import OfferSection from './components/OfferSection';
import LoginRegister from './components/LoginRegister';
// import Calculator from './components/CalculatorSection';
import UserProfile from './components/UserProfile';
// import FoodPackages from './components/FoodPackages';
import Home from './pages/Home';
import SingleCoach from './pages/SingleCoach';

function App() {
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
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
