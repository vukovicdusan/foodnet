import Region from './UI/Region';
import Wrapper from './UI/Wrapper';
import profileImg1 from '../assets/css/img/profileImgs/1.jpg';
import profileImg2 from '../assets/css/img/profileImgs/2.jpg';
import profileImg3 from '../assets/css/img/profileImgs/3.jpg';
import profileImg4 from '../assets/css/img/profileImgs/4.jpg';
import profileImg5 from '../assets/css/img/profileImgs/5.jpg';
import { Link } from 'react-router-dom';

let DUMMY_DATA = [
	{
		id: 1,
		name: 'Miljko Vlajković',
		type: 'Trener',
		image: profileImg1,
		price: '10€',
		gender: 'male',
	},
	{
		id: 2,
		name: 'Vlajko Miljkovic',
		type: 'Nutricionista',
		image: profileImg2,
		price: '15€',
		gender: 'male',
	},
	{
		id: 3,
		name: 'Milko Didic',
		type: 'Nutricionista',
		image: profileImg3,
		price: '10€',
		gender: 'male',
	},
	{
		id: 4,
		name: 'Mara Sretenovic',
		type: 'Trener',
		image: profileImg4,
		price: '20€',
		gender: 'female',
	},
	{
		id: 5,
		name: 'Saša Marinkovic',
		type: 'Trener',
		image: profileImg5,
		price: '5€',
		gender: 'female',
	},
];
const MarketSection = (props) => {
	return (
		<Region regionClass={'market-region'} background={'background-dark'}>
			<Wrapper>
				<div id="market-section">
					<div className="dash-vertical" data-state="reversed"></div>
					<h2>Berza</h2>

					<ul role="list" className="grid">
						{DUMMY_DATA.map((coach) => (
							<li key={coach.id}>
								<Link
									to={'/single-coach/' + coach.id}
									className="[ frame ] [ no-show ]"
								>
									<h4>{coach.type}</h4>
									<p>{coach.name}</p>
									<p>{coach.price} po terminu</p>
									<img src={coach.image} alt="profile" />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Wrapper>
		</Region>
	);
};

export default MarketSection;
