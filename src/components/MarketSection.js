import Region from './UI/Region';
import Wrapper from './UI/Wrapper';
import profile1 from '../assets/css/img/profileImgs/1.jpg';
import profile2 from '../assets/css/img/profileImgs/2.jpg';
import profile3 from '../assets/css/img/profileImgs/3.jpg';
import profile4 from '../assets/css/img/profileImgs/4.jpg';
import profile5 from '../assets/css/img/profileImgs/5.jpg';
const MarketSection = () => {
	return (
		<Region regionClass={'market-region'} background={'background-dark'}>
			<Wrapper>
				<h2>Berza</h2>

				<ul role="list" className="grid">
					<li>
						<a className="frame" href="#">
							<h4>Trener</h4>
							<p>Miljko Vajković</p>
							<p>Trener</p>
							<img src={profile1} alt="profile image" />
						</a>
					</li>
					<li>
						<a className="frame" href="#">
							<h4>Nutricionista</h4>
							<p>Vajko Miljkovic</p>
							<p>Trener</p>
							<img src={profile2} alt="profile image" />
						</a>
					</li>
					<li>
						<a className="frame" href="#">
							<h4>Trener</h4>
							<p>Milko Didic</p>
							<p>Trener</p>
							<img src={profile3} alt="profile image" />
						</a>
					</li>
					<li>
						<a className="frame" href="#">
							<h4>Nutricionista</h4>
							<p>Marko Sretenovic</p>
							<p>Trener</p>
							<img src={profile4} alt="profile image" />
						</a>
					</li>
					<li>
						<a className="frame" href="#">
							<h4>Trener</h4>
							<p>Sasa Marinkovic</p>
							<p>Trener</p>
							<img src={profile5} alt="profile image" />
						</a>
					</li>
				</ul>
			</Wrapper>
		</Region>
	);
};

export default MarketSection;
