import Region from './UI/Region';
import Wrapper from './UI/Wrapper';

import { Link } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';
import CoachesContext from '../store/coaches-context';

const MarketSection = (props) => {
	const { coachesState, setCoachesState } = useContext(CoachesContext);

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
	if (props.filterState !== 'sve') {
		coaches = coachesState
			.filter(
				(filteredCoaches) =>
					filteredCoaches.type.toLowerCase() === props.filterState
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
						onClick={props.filterHandler('sve')}
						className="button"
						data-state="reversed"
					>
						Sve
					</button>
					<button
						id="treneri"
						onClick={props.filterHandler('trener')}
						className="button"
						data-state="reversed"
						filter-state="treneri"
					>
						Treneri
					</button>
					<button
						onClick={props.filterHandler('nutricionista')}
						className="button"
						data-state="reversed"
					>
						Nutricionisti
					</button>
					<button
						onClick={props.filterHandler('trener/nutricionista')}
						className="button"
						data-state="reversed"
					>
						Trener/Nutricionista
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
							<button onClick={props.filterHandler} className="button">
								Sve
							</button>
							<button onClick={props.filterHandler} className="button">
								Treneri
							</button>
							<button onClick={props.filterHandler} className="button">
								Nutricionisti
							</button>
							<button onClick={props.filterHandler} className="button">
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
