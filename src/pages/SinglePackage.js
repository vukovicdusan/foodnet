import Wrapper from '../components/UI/Wrapper';
import Region from '../components/UI/Region';
import mealImg1 from '../assets/css/img/mealImgs/mealImg1.jpg';
import mealImg2 from '../assets/css/img/mealImgs/mealImg2.jpg';
import mealImg3 from '../assets/css/img/mealImgs/mealImg3.jpg';
import mealImg4 from '../assets/css/img/mealImgs/mealImg4.jpg';
import mealImg5 from '../assets/css/img/mealImgs/mealImg5.jpg';
import chevronDown from '../assets/css/img/chevron-down.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { Route } from 'react-router-dom';
import SingleMeal from './SingleMeal';

const DUMMY_MEALS = [
	{
		id: 1,
		name: 'Prženice sa borovnicama',
		type: 'Doručak',
		image: mealImg1,
		price: 10,
	},
	{
		id: 2,
		name: 'Barena jaja sa povrćem',
		type: 'Doručak',
		image: mealImg2,
		price: 15,
	},
	{
		id: 3,
		name: 'Fit pica',
		type: 'Večera',
		image: mealImg3,
		price: 10,
	},
	{
		id: 4,
		name: 'Fit činija',
		type: 'Ručak',
		image: mealImg4,
		price: 20,
	},
	{
		id: 5,
		name: 'Biftek sa povrćem',
		type: 'Ručak',
		image: mealImg5,
		price: 15,
	},
];

const SinglePackage = () => {
	const authContext = useContext(AuthContext);
	const kcalCount = useParams();
	// console.log(kcalCount);
	const [filterState, setFilterState] = useState('sve');

	const filterHandler = (e) => {
		e.preventDefault();
		switch (e.target.innerHTML.toLowerCase()) {
			case 'doručak':
				setFilterState('doručak');
				break;
			case 'ručak':
				setFilterState('ručak');
				break;
			case 'večera':
				setFilterState('večera');
				break;
			case 'sve':
				setFilterState('sve');
				break;
			default:
				return 'sve';
		}
	};

	let mealsList = DUMMY_MEALS.map((meal) => (
		<li key={meal.id}>
			<div
				to={'/single-meal/' + meal.id}
				className="[ frame ] [ no-show ]"
			>
				<Link>
					<h4>{meal.name}</h4>
				</Link>
				<p>{meal.type}</p>
				<p>{meal.price}€ po terminu</p>
				<img src={meal.image} alt="meal" />
				<button
					data-state="reversed"
					className="[ button ] [ meals-button ]"
				>
					+
				</button>
			</div>
		</li>
	));
	if (filterState !== 'sve') {
		mealsList = DUMMY_MEALS.filter(
			(filteredMeals) => filteredMeals.type.toLowerCase() === filterState
		).map((meal) => (
			<li key={meal.id}>
				<div
					to={'/single-meal/' + meal.id}
					className="[ frame ] [ no-show ]"
				>
					<Link>
						<h4>{meal.name}</h4>
					</Link>
					<p>{meal.type}</p>
					<p>{meal.price}€ po terminu</p>
					<img src={meal.image} alt="meal" />
					<button
						data-state="reversed"
						className="[ button ] [ meals-button ]"
					>
						+
					</button>
				</div>
			</li>
		));
	}

	const dropdownToggler = (e) => {
		e.preventDefault();
	};
	return (
		<Region
			regionId={'single-package--region'}
			background={'background-light'}
		>
			<Wrapper>
				<div className="[ wrap ] [ grid-frame-filter ]">
					<button
						onClick={filterHandler}
						className="button"
						// data-state="reversed"
					>
						Sve
					</button>
					<button
						id="treneri"
						onClick={filterHandler}
						className="button"
						// data-state="reversed"
						filter-state="treneri"
					>
						Doručak
					</button>
					<button
						onClick={filterHandler}
						className="button"
						// data-state="reversed"
					>
						Ručak
					</button>
					<button
						onClick={filterHandler}
						className="button"
						// data-state="reversed"
					>
						Večera
					</button>
				</div>
				{/* <div className="grid"> */}
				<ul
					role="list"
					className="[ grid ] [ margin-top-2 ] [ grid-frame ]"
				>
					{mealsList}
				</ul>
			</Wrapper>
		</Region>
	);
};

export default SinglePackage;
