import Wrapper from './UI/Wrapper';
import logo from '../assets/css/img/chili-pepper.png';
import chevronDown from '../assets/css/img/chevron-down.svg';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AuthContext from '../store/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { db } from '../assets/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Header = () => {
	const { currentUser, dispatch } = useContext(AuthContext);
	const [currentUserInfo, setCurrentUserInfo] = useState({});
	useEffect(() => {
		let user = {};
		try {
			const loadSingleUser = async () => {
				const docRef = doc(db, 'coaches', currentUser.uid);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					Object.assign(user, docSnap.data());
					setCurrentUserInfo(user);
					console.log(docSnap.data());
				} else {
					console.log('No such document!');
				}
			};
			currentUser && loadSingleUser();
		} catch (err) {
			console.log(err);
		}
	}, [currentUser]);

	// console.log(currentUserInfo);
	return (
		<header className="[ site-header ]">
			<Wrapper>
				<div className="[ repel ]">
					<Link to="/home" className="logo">
						<img width="35" height="35" src={logo} alt="logo" />
					</Link>
					<nav>
						<ul className="[ wrap ] [ text-bold ]">
							<li>
								<NavLink
									to="/home"
									activeClassName="navlink-active"
								>
									Početna
								</NavLink>
							</li>
							<li>
								<HashLink to="/home/#food-packages">
									Paketi
								</HashLink>
							</li>
							<li>
								<HashLink to="/home/#market-section">
									Berza
								</HashLink>
							</li>
							<li>
								<HashLink to="/home/#calculator-section">
									Kalkulator
								</HashLink>
							</li>

							<li>
								{!currentUser && (
									<NavLink
										activeClassName="navlink-active"
										to="/login-register/login"
									>
										Prijavi se
									</NavLink>
								)}
								{currentUser && (
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
											{currentUserInfo.name}
										</span>
										<ul className="[ dropdown-menu ] [ stack ] [ box ]">
											<Link to="/user-profile">
												Podešavanja
											</Link>
											<a
												href="/"
												onClick={() =>
													dispatch({
														type: 'LOGOUT',
													})
												}
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
