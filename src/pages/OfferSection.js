import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import arrow from '../assets/css/img/arrow.svg';
import Card from '../components/Card';

const OfferSection = (props) => {
	return (
		<Region background={'background-dark'}>
			<Wrapper>
				<div className="dash-vertical" data-state="reversed"></div>
				<div className="[ offer-section ] [ grid ]">
					<article className="[ stack ] [ box ] [ invert ] [ dashed ]stack">
						<div className="card-header text-bold">
							Poruci kompletnu ishranu koja stize na tvoju kucnu
							adresu svaki dan.
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
					<article className="[ stack ] [ box ] [ invert ] [ dashed ]stack">
						<div className="card-header text-bold">
							Poruci kompletnu ishranu koja stize na tvoju kucnu
							adresu svaki dan.
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
					<article className="[ stack ] [ box ] [ invert ] [ dashed ]stack">
						<div className="card-header text-bold">
							Poruci kompletnu ishranu koja stize na tvoju kucnu
							adresu svaki dan.
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
					<article className="[ stack ] [ box ] [ invert ] [ dashed ]stack">
						<div className="card-header text-bold">
							Poruci kompletnu ishranu koja stize na tvoju kucnu
							adresu svaki dan.
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
			</Wrapper>
		</Region>
	);
};

export default OfferSection;
