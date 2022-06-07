import Region from './UI/Region';
import Wrapper from './UI/Wrapper';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import CoachesContext from '../store/coaches-context';

const MarketSection = (props) => {
	const { coachesState } = useContext(CoachesContext);
	// console.log(coachesState);
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

	return (
		<Region regionId={'market-region'} background={'background-dark'}>
			<Wrapper>
				<div className="dash-vertical" data-state="reversed"></div>
				<h2>Berza</h2>
				<div className="[ wrap ] [ grid-frame-filter ]">
					<button
						onClick={(e) => props.filterHandler(e, 'sve')}
						className="button"
						data-state="reversed"
					>
						Sve
					</button>
					<button
						id="treneri"
						onClick={(e) => props.filterHandler(e, 'trener')}
						className="button"
						data-state="reversed"
						filter-state="treneri"
					>
						Treneri
					</button>
					<button
						onClick={(e) => props.filterHandler(e, 'nutricionista')}
						className="button"
						data-state="reversed"
					>
						Nutricionisti
					</button>
					<button
						onClick={(e) =>
							props.filterHandler(e, 'trener/nutricionista')
						}
						className="button"
						data-state="reversed"
					>
						Trener/Nutricionista
					</button>
				</div>
				<ul
					role="list"
					className="[ grid ] [ margin-top-2 ] [ grid-frame ]"
				>
					{coaches}
				</ul>
			</Wrapper>
		</Region>
	);
};

export default MarketSection;
