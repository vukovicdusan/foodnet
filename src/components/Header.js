import Wrapper from './UI/Wrapper';
import logo from '../assets/css/img/chili-pepper.png';
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
									<a href="#" onClick={authContext.logout}>
										Odjavi se
									</a>
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
