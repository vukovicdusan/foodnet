import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import arrow from '../assets/css/img/arrow.svg';

const FoodPackages = (props) => {
	console.log(props.kcalCount);
	let dnevniPaket = 'Dnevni paket';
	let nedeljniPaket = 'Nedeljni paket';
	let mesecniPaket = 'Mesecni paket';
	if (props.kcalCount !== '' && typeof props.kcalCount !== 'undefined') {
		dnevniPaket = dnevniPaket + ' za: ' + props.kcalCount + 'kcal';
		nedeljniPaket = nedeljniPaket + ' za: ' + props.kcalCount + 'kcal';
		mesecniPaket = mesecniPaket + ' za: ' + props.kcalCount + 'kcal';
	}
	return (
		<Region class={'food-packages--region'} background={'background-light'}>
			<Wrapper>
				<div className="[ food-packages ] [ grid ]">
					<article className="[ stack ] [ box ] [ dashed ] [ border-title--wrapper ]">
						<div className="[ card-header ] [ text-bold ] [ border-title ]">
							{dnevniPaket}
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
							{nedeljniPaket}
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
							{mesecniPaket}
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
