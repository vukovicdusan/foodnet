import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import arrow from '../assets/css/img/arrow.svg';
import { Link } from 'react-router-dom';

const FoodPackages = (props) => {
	console.log(props.kcalCount);
	let dnevniPaket = 'Dnevni paket';
	let nedeljniPaket = 'Nedeljni paket';
	let mesecniPaket = 'Mesečni paket';
	if (props.kcalCount !== '' && typeof props.kcalCount !== 'undefined') {
		dnevniPaket = dnevniPaket + ' za: ' + props.kcalCount + 'kcal';
		nedeljniPaket = nedeljniPaket + ' za: ' + props.kcalCount + 'kcal';
		mesecniPaket = mesecniPaket + ' za: ' + props.kcalCount + 'kcal';
	}
	return (
		<Region
			regionId={'food-packages--region'}
			background={'background-light'}
		>
			<Wrapper>
				<div id="food-packages" className="[ food-packages ] [ grid ]">
					<article className="[ stack ] [ box ] [ dashed ] [ border-title--wrapper ]">
						<div className="[ card-header ] [ text-bold ] [ border-title ]">
							{dnevniPaket}
						</div>
						<div className="card-content">
							Sami ili uz pomoć nutricioniste sastavite dnevni
							plan obroka koji će dovesti do povećanja, smanjenja
							ili održanja telesne mase. Obroci vam stižu na kućnu
							adresu dnevno.
						</div>
						<Link
							to={'/single-package'}
							tabIndex="0"
							className="[ card-footer ] [ card-button ]"
						>
							<span className="with-icon">
								Baci pogled
								<svg
									aria-hidden="true"
									focusable="false"
									className="icon"
								>
									<use href={arrow + '#arrow'}></use>
								</svg>
							</span>
						</Link>
					</article>
					<article className="[ stack ] [ box ] [ dashed ] [ border-title--wrapper ]">
						<div className="[ card-header ] [ text-bold ] [ border-title ]">
							{nedeljniPaket}
						</div>
						<div className="card-content">
							Sami ili uz pomoć nutricioniste sastavite nedeljni
							plan obroka koji će dovesti do povećanja, smanjenja
							ili održanja telesne mase. Obroci vam stižu na kućnu
							adresu dnevno.
						</div>
						<Link
							to={'/single-package'}
							tabIndex="0"
							className="[ card-footer ] [ card-button ]"
						>
							<span className="with-icon">
								Baci pogled
								<svg
									aria-hidden="true"
									focusable="false"
									className="icon"
								>
									<use href={arrow + '#arrow'}></use>
								</svg>
							</span>
						</Link>
					</article>
					<article className="[ stack ] [ box ] [ dashed ] [ border-title--wrapper ]">
						<div className="[ card-header ] [ text-bold ] [ border-title ]">
							{mesecniPaket}
						</div>
						<div className="card-content">
							Sami ili uz pomoć nutricioniste sastavite mesečni
							plan obroka koji će dovesti do povećanja, smanjenja
							ili održanja telesne mase. Obroci vam stižu na kućnu
							adresu dnevno.
						</div>
						<Link
							to={'/single-package'}
							tabIndex="0"
							className="[ card-footer ] [ card-button ]"
						>
							<span className="with-icon">
								Baci pogled
								<svg
									aria-hidden="true"
									focusable="false"
									className="icon"
								>
									<use href={arrow + '#arrow'}></use>
								</svg>
							</span>
						</Link>
					</article>
				</div>
				<div className="dash-vertical"></div>
			</Wrapper>
		</Region>
	);
};

export default FoodPackages;
