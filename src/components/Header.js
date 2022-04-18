import Wrapper from './UI/Wrapper';
import logo from '../assets/css/img/chili-pepper.png';
import chevronDown from '../assets/css/img/chevron-down.svg';
import { NavLink, Link } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import { useContext } from 'react';

const Header = () => {
	const authContext = useContext(AuthContext);
	const isLoggedIn = authContext.isLoggedIn;
	return (
		<header className="[ site-header ]">
			<Wrapper>
				<div className="[ repel ]">
					<Link to="/home" className="logo">
						<img width="35" height="35" src={logo} alt="logo" />
					</Link>
					<nav>
						<ul className="[ wrap ] [ text-bold ]" role="list">
							<li>
								<a href="">Prijavi Se</a>
							</li>
							<li>
								<a href="">Prijavi Se</a>
							</li>
							<li>
								<a href="">Prijavi Se</a>
							</li>
							<li>
								<a href="">Prijavi Se</a>
							</li>
							<li>
								{!isLoggedIn && (
									<NavLink
										activeClassName="navlink-active"
										to="/login-register/login"
									>
										Prijavi se
									</NavLink>
								)}
								{isLoggedIn && (
									<div className="dropdown-toggle">
										<span className="with-icon">
											<svg
												aria-hidden="true"
												focusable="false"
												className="icon"
											>
												<use
													href={
														chevronDown +
														'#chevron-down'
													}
												></use>
											</svg>
											Profil
										</span>
										<ul className="[ dropdown-menu ] [ stack ] [ box ]">
											<Link to="/user-profile">
												Podešavanja
											</Link>
											<a
												href="/"
												onClick={authContext.logout}
											>
												Odjavi se
											</a>
										</ul>
									</div>
								)}
							</li>
						</ul>
					</nav>
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
