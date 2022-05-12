import Region from './UI/Region';
import Wrapper from './UI/Wrapper';
import profileImg1 from '../assets/css/img/profileImgs/1.jpg';
import profileImg2 from '../assets/css/img/profileImgs/2.jpg';
import profileImg3 from '../assets/css/img/profileImgs/3.jpg';
import profileImg4 from '../assets/css/img/profileImgs/4.jpg';
import profileImg5 from '../assets/css/img/profileImgs/5.jpg';
import { Link } from 'react-router-dom';
import chevronDown from '../assets/css/img/chevron-down.svg';
import { useEffect, useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getStorage, ref } from 'firebase/storage';

// // Set the configuration for your app
// // TODO: Replace with your app's config object
// const firebaseConfig = {
// 	apiKey: 'AIzaSyCK5L9zhNN0e8AaK1swxU5Gpgh7shWWg3Q',
// 	//   authDomain: '<your-auth-domain>',
// 	//   databaseURL: '<your-database-url>',
// 	storageBucket: 'gs://food-net-auth.appspot.com/',
// };
// const firebaseApp = initializeApp(firebaseConfig);

// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage(firebaseApp);

// // Create a storage reference from our storage service
// const storageRef = ref(storage);

let DUMMY_DATA = [
	{
		id: 1,
		name: 'Miljko Vlajković',
		type: 'Trener',
		image: profileImg1,
		price: 10,
		gender: 'male',
	},
	{
		id: 2,
		name: 'Vlajko Miljkovic',
		type: 'Nutricionista',
		image: profileImg2,
		price: 15,
		gender: 'male',
	},
	{
		id: 3,
		name: 'Milko Didic',
		type: 'Nutricionista',
		image: profileImg3,
		price: 10,
		gender: 'male',
	},
	{
		id: 4,
		name: 'Mara Sretenovic',
		type: 'Trener',
		image: profileImg4,
		price: 20,
		gender: 'female',
	},
	{
		id: 5,
		name: 'Saša Marinkovic',
		type: 'Trener',
		image: profileImg5,
		price: 5,
		gender: 'female',
	},
];
const MarketSection = (props) => {
	// const [coachesList, setCoachesList] = useState([]);
	// useEffect(() => {
	// 	const fetchCoaches = async () => {
	// 		const response = await fetch(
	// 			'https://food-net-auth-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
	// 		);
	// 		const responseData = await response.json();

	// 		const loadedCoaches = [];
	// 		for (const key in responseData) {
	// 			loadedCoaches.push({
	// 				id: key,
	// 				name: responseData[key].name,
	// 				type: responseData[key].type,
	// 				image: responseData[key].image,
	// 				price: responseData[key].price,
	// 				gender: responseData[key].gender,
	// 			});
	// 		}
	// 		setCoachesList(loadedCoaches);
	// 	};

	// 	fetchCoaches();
	// }, []);

	// let coachName = coach.name.charAt(0).toUpperCase + coach.name.slice(1);
	const [filterState, setFilterState] = useState('sve');

	const filterHandler = (e) => {
		e.preventDefault();
		switch (e.target.innerHTML.toLowerCase()) {
			case 'treneri':
				setFilterState('trener');
				break;
			case 'nutricionisti':
				setFilterState('nutricionista');
				break;
			case 'trener/nutricionisti':
				setFilterState('trener/nutricionista');
				break;
			case 'sve':
				setFilterState('sve');
				break;
			default:
				return 'sve';
		}
	};

	let coachesList = DUMMY_DATA.map((coach) => (
		<li key={coach.id}>
			<Link
				to={'/single-coach/' + coach.id}
				className="[ frame ] [ no-show ]"
			>
				<h4>{coach.type}</h4>
				<p>{coach.name}</p>
				<p>{coach.price}€ po terminu</p>
				<img src={coach.image} alt="profile" />
			</Link>
		</li>
	));
	if (filterState !== 'sve') {
		coachesList = DUMMY_DATA.filter(
			(filteredCoaches) =>
				filteredCoaches.type.toLowerCase() === filterState
		).map((coach) => (
			<li key={coach.id}>
				<Link
					to={'/single-coach/' + coach.id}
					className="[ frame ] [ no-show ]"
				>
					<h4>{coach.type}</h4>
					<p>{coach.name}</p>
					<p>{coach.price}€ po terminu</p>
					<img src={coach.image} alt="profile" />
				</Link>
			</li>
		));
	}

	return (
		<Region regionClass={'market-region'} background={'background-dark'}>
			<Wrapper>
				<div id="[ market-section ]">
					<div className="dash-vertical" data-state="reversed"></div>
					<h2>Berza</h2>
					<div className="[ wrap ]">
						<button
							onClick={filterHandler}
							className="button"
							data-state="reversed"
						>
							Sve
						</button>
						<button
							id="treneri"
							onClick={filterHandler}
							className="button"
							data-state="reversed"
							filter-state="treneri"
						>
							Treneri
						</button>
						<button
							onClick={filterHandler}
							className="button"
							data-state="reversed"
						>
							Nutricionisti
						</button>
						<button
							onClick={filterHandler}
							className="button"
							data-state="reversed"
						>
							Trener/Nutricionisti
						</button>
					</div>
					<div className="dropdown-toggle">
						<span className="with-icon">
							<svg
								aria-hidden="true"
								focusable="false"
								className="icon"
							>
								<use href={chevronDown + '#chevron-down'}></use>
							</svg>
							Filter
						</span>
						<ul className="[ dropdown-menu ] [ stack ] [ box ]">
							<button onClick={filterHandler} className="button">
								Sve
							</button>
							<button onClick={filterHandler} className="button">
								Treneri
							</button>
							<button onClick={filterHandler} className="button">
								Nutricionisti
							</button>
							<button onClick={filterHandler} className="button">
								Trener/Nutricionisti
							</button>
						</ul>
					</div>

					<ul role="list" className="[ grid ] [ margin-top-2 ]">
						{/* {DUMMY_DATA.map((coach) => (
							<li key={coach.id}>
								<Link
									to={'/single-coach/' + coach.id}
									className="[ frame ] [ no-show ]"
								>
									<h4>{coach.type}</h4>
									<p>{coach.name}</p>
									<p>{coach.price}€ po terminu</p>
									<img src={coach.image} alt="profile" />
								</Link>
							</li>
						))} */}
						{coachesList}
					</ul>
				</div>
			</Wrapper>
		</Region>
	);
};

export default MarketSection;
