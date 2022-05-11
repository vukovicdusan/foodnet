import Hero from '../components/Hero';
import OfferSection from '../components/OfferSection';
import Calculator from '../components/CalculatorSection';
import FoodPackages from '../components/FoodPackages';
import MarketSection from '../components/MarketSection';
import { useState } from 'react';

const Home = () => {
	const [macroValuesState, setMacroValueState] = useState('');
	const macroValuesHandler = (val) => {
		setMacroValueState(val);
	};
	const [coachState, setCoachState] = useState('');
	const coachHandler = (personInfo) => {
		setCoachState(personInfo);
	};
	console.log(coachState);

	return (
		<div className="home">
			<Hero></Hero>
			<OfferSection></OfferSection>
			<Calculator macroValuesHandler={macroValuesHandler}></Calculator>
			<FoodPackages kcalCount={macroValuesState}></FoodPackages>
			<MarketSection coachHandler={coachHandler}></MarketSection>
		</div>
	);
};

export default Home;
