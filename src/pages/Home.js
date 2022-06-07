import Hero from '../components/Hero';
import OfferSection from '../components/OfferSection';
import Calculator from '../components/CalculatorSection';
import FoodPackages from '../components/FoodPackages';
import MarketSection from '../components/MarketSection';
import { useState } from 'react';

const Home = () => {
	const [coachState, setCoachState] = useState('');
	const coachHandler = (personInfo) => {
		setCoachState(personInfo);
	};
	const [filterState, setFilterState] = useState('sve');

	const filterHandler = (e, type) => {
		// e.preventDefault();
		switch (type) {
			case 'trener':
				setFilterState('trener');
				break;
			case 'nutricionista':
				setFilterState('nutricionista');
				break;
			case 'trener/nutricionista':
				setFilterState('trener/nutricionista');
				break;
			case 'sve':
				setFilterState('sve');
				break;
			default:
				return 'sve';
		}
	};

	return (
		<div className="home">
			<Hero filterHandler={filterHandler}></Hero>
			<OfferSection></OfferSection>
			<Calculator></Calculator>
			<FoodPackages></FoodPackages>
			<MarketSection
				coachHandler={coachHandler}
				filterHandler={filterHandler}
				filterState={filterState}
			></MarketSection>
		</div>
	);
};

export default Home;
