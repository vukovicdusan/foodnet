import Region from './UI/Region';
import Wrapper from './UI/Wrapper';
// import profileImg1 from '../assets/css/img/profileImgs/1.jpg';
// import profileImg2 from '../assets/css/img/profileImgs/2.jpg';
// import profileImg3 from '../assets/css/img/profileImgs/3.jpg';
// import profileImg4 from '../assets/css/img/profileImgs/4.jpg';
// import profileImg5 from '../assets/css/img/profileImgs/5.jpg';
import { Link } from 'react-router-dom';
// import chevronDown from '../assets/css/img/chevron-down.svg';
import { useContext, useEffect, useState } from 'react';
import CoachesContext from '../store/coaches-context';

const MarketSection = (props) => {
	const { coachesState, setCoachesState } = useContext(CoachesContext);
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

	let coaches = coachesState.map((coach) => (
		<li key={coach.id}>
			<Link
				to={'/single-coach/' + coach.id}
				className="[ frame ] [ no-show ]"
			>
				<h4>
					{coach.type.charAt(0).toUpperCase() + coach.type.slice(1)}
				</h4>
				<p>{coach.name}</p>
				<p>{coach.price}€ po terminu</p>
				<img src={coach.image} alt="profile" />
			</Link>
		</li>
	));
	if (filterState !== 'sve') {
		coaches = coachesState
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
						<h4>
							{coach.type.charAt(0).toUpperCase() +
								coach.type.slice(1)}
						</h4>
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
		<Region regionId={'market-region'} background={'background-dark'}>
			<Wrapper>
				{/* <div id="[ market-section ]"> */}
				<div className="dash-vertical" data-state="reversed"></div>
				<h2>Berza</h2>
				<div className="[ wrap ] [ grid-frame-filter ]">
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
					{/* <div className="dropdown-toggle">
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
								Trener/Nutricionisti
							</button>
						</ul>
					</div> */}
				</div>

				<ul
					role="list"
					className="[ grid ] [ margin-top-2 ] [ grid-frame ]"
				>
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
					{/* {coachesList} */}
					{coaches}
				</ul>
				{/* </div> */}
			</Wrapper>
		</Region>
	);
};

export default MarketSection;
