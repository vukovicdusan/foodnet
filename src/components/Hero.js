import Wrapper from '../components/UI/Wrapper';
import Region from '../components/UI/Region';

const Hero = () => {
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
						Tu smo da ti pomognemo da ostvaris svoje ciljeve kakvi
						god oni bili.
					</p>
					<div className="[ hero-cta ] [ wrap ]">
						<a tabIndex="0" className="[ dashed ] [ button ]">
							Naruči ishranu
						</a>
						<a tabIndex="0" className="[ dashed ] [ button ]">
							Odaberi Trenera
						</a>
						<a tabIndex="0" className="[ dashed ] [ button ]">
							Odaberi Nutricionistu
						</a>
					</div>
				</div>
				<div className="dash-vertical"></div>
			</Wrapper>
		</Region>
	);
};

export default Hero;
