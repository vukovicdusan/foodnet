import './App.css';
import './assets/css/style.css';
import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Hero from './pages/Hero';
import OfferSection from './pages/OfferSection';
import LoginRegister from './pages/LoginRegister';
import Calculator from './pages/CalculatorSection';

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
					<Route path="/home" exact>
						<Hero></Hero>
						<OfferSection></OfferSection>
						<Calculator></Calculator>
					</Route>
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
