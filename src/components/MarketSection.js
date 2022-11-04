import Region from './UI/Region';
import Wrapper from './UI/Wrapper';
import { Link } from 'react-router-dom';
import chevronDown from '../assets/css/img/chevron-down.svg';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../assets/firebase/firebase';

const MarketSection = (props) => {
	const [coaches, setCoaches] = useState([]);
	const [filterState, setFilterState] = useState('sve');

	useEffect(() => {
		const fetch = async () => {
			let list = [];
			try {
				const querySnapshot = await getDocs(collection(db, 'coaches'));
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					list.push({ id: doc.id, ...doc.data() });
				});
				setCoaches(list);
			} catch (err) {
				console.log(err);
			}
		};
		fetch();
	}, []);

	const filterHandler = (e) => {
		e.preventDefault();
		console.log(e.target.innerHTML.toLowerCase());
		switch (e.target.innerHTML.toLowerCase()) {
			case 'treneri':
				setFilterState('trener');
				break;
			case 'nutricionisti':
				setFilterState('nutricionista');
				break;
			case 'trener/nutricionista':
				setFilterState('trener & nutricionista');
				break;
			case 'sve':
				setFilterState('sve');
				break;
			default:
				return 'sve';
		}
	};

	let coachesList = coaches.map((coach) => (
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
		coachesList = coaches
			.filter(
				(filteredCoaches) =>
					filteredCoaches.type.toLowerCase() === filterState
			)
			.map((coach) => (
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

	const dropdownToggler = (e) => {
		e.preventDefault();
	};

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
							Trener/Nutricionista
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
						<ul
							onClick={dropdownToggler}
							className="[ dropdown-menu ] [ stack ] [ box ]"
						>
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
								Trener/Nutricionista
							</button>
						</ul>
					</div>

					<ul className="[ grid ] [ margin-top-2 ]">{coachesList}</ul>
				</div>
			</Wrapper>
		</Region>
	);
};

export default MarketSection;
