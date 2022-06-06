import Wrapper from '../components/UI/Wrapper';
import Region from '../components/UI/Region';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Hero = (props) => {
	return (
		<Region>
			<Wrapper>
				<div className="[ hero ] [ stack ] [ center-inner ]">
					<h1>
						Food <span className="color-red">Network</span>
					</h1>

					<h4>
						Mreza <span className="color-red">uzivanja</span>,{' '}
						<span className="color-red">snage</span>,{' '}
						<span className="color-red">zdravlja</span> i{' '}
						<span className="color-red">nauke</span>.
					</h4>
					<p>
						Tu smo da ti pomognemo da ostvariš svoje ciljeve kakvi
						god oni bili.
					</p>
					<div className="[ hero-cta ] [ wrap ]">
						<Link
							to="/single-package"
							tabIndex="0"
							className="[ dashed ] [ button ]"
						>
							Naruči ishranu
						</Link>
						<HashLink
							to="/home/#market-region"
							tabIndex="0"
							className="[ dashed ] [ button ]"
							onClick={props.filterHandler('trener')}
						>
							Odaberi Trenera
						</HashLink>
						<HashLink
							to="/home/#market-region"
							tabIndex="0"
							className="[ dashed ] [ button ]"
							onClick={props.filterHandler('nutricionista')}
						>
							Odaberi Nutricionistu
						</HashLink>
					</div>
				</div>
				<div className="dash-vertical"></div>
			</Wrapper>
		</Region>
	);
};

export default Hero;
