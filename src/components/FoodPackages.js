import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import arrow from '../assets/css/img/arrow.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';

const FoodPackages = (props) => {
	// console.log(authContext.kcalAmount);
	const authContext = useContext(AuthContext);
	let dnevniPaket = 'Dnevni paket';
	let nedeljniPaket = 'Nedeljni paket';
	let mesecniPaket = 'Mesečni paket';
	if (
		authContext.kcalAmount &&
		typeof authContext.kcalAmount !== 'undefined'
	) {
		dnevniPaket = dnevniPaket + ' za: ' + authContext.kcalAmount + 'kcal';
		nedeljniPaket =
			nedeljniPaket + ' za: ' + authContext.kcalAmount + 'kcal';
		mesecniPaket = mesecniPaket + ' za: ' + authContext.kcalAmount + 'kcal';
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
							to={'/single-package/' + authContext.kcalAmount}
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
							to={'/single-package/' + authContext.kcalAmount}
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
							to={'/single-package/' + authContext.kcalAmount}
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
