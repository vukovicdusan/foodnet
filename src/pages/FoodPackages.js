import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import arrow from '../assets/css/img/arrow.svg';

const FoodPackages = () => {
	return (
		<Region class={'food-packages--region'} background={'background-light'}>
			<Wrapper>
				<div className="[ food-packages ] [ grid ]">
					<article className="[ stack ] [ box ] [ dashed ] [ border-title--wrapper ]">
						<div className="[ card-header ] [ text-bold ] [ border-title ]">
							Dnevni paket
						</div>
						<div className="card-content">
							Sami ili uz pomoc nutricioniste sastavite mesecni,
							nedeljni ili dnevni plan obroka koji ce dovesti do
							povecanja, smanjenja ili odrzanja telesne mase.
							Obroci vam stizu na kucnu adresu dnevno.
						</div>
						<a
							href="/"
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
						</a>
					</article>
					<article className="[ stack ] [ box ] [ dashed ] [ border-title--wrapper ]">
						<div className="[ card-header ] [ text-bold ] [ border-title ]">
							Nedeljni paket
						</div>
						<div className="card-content">
							Sami ili uz pomoc nutricioniste sastavite mesecni,
							nedeljni ili dnevni plan obroka koji ce dovesti do
							povecanja, smanjenja ili odrzanja telesne mase.
							Obroci vam stizu na kucnu adresu dnevno.
						</div>
						<a
							href="/"
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
						</a>
					</article>
					<article className="[ stack ] [ box ] [ dashed ] [ border-title--wrapper ]">
						<div className="[ card-header ] [ text-bold ] [ border-title ]">
							Mesečni paket
						</div>
						<div className="card-content">
							Sami ili uz pomoc nutricioniste sastavite mesecni,
							nedeljni ili dnevni plan obroka koji ce dovesti do
							povecanja, smanjenja ili odrzanja telesne mase.
							Obroci vam stizu na kucnu adresu dnevno.
						</div>
						<a
							href="/"
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
						</a>
					</article>
				</div>
				<div className="dash-vertical"></div>
			</Wrapper>
		</Region>
	);
};

export default FoodPackages;
