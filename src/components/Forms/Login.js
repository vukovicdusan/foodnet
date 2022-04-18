import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import Wrapper from '../UI/Wrapper';

const Login = (props) => {
	const [isLogin, setIsLogin] = useState(false);
	const [emailValue, setEmailValue] = useState();
	const [passValue, setPassValue] = useState();

	const authContext = useContext(AuthContext);

	const emailChangeHandler = (e) => {
		setEmailValue(e.target.value);
	};

	const passChangeHandler = (e) => {
		setPassValue(e.target.value);
	};

	const email = emailValue;
	const pass = passValue;

	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (isLogin) {
		} else {
			fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCK5L9zhNN0e8AaK1swxU5Gpgh7shWWg3Q',
				{
					method: 'POST',
					body: JSON.stringify({
						email: email,
						password: pass,
						returnSecureToken: true,
					}),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
				.then((res) => {
					if (res.ok) {
						return res.json();
						// setIsLogin(true);
					} else {
						return res.json().then((data) => {
							let errorMessage = 'Authentication Failed';
							// if (data && data.error && data.error.message) {
							// 	errorMessage = data.error.message;
							// }

							throw new Error(errorMessage);
						});
					}
				})
				.then((data) => {
					authContext.login(data.idToken);
				})
				.catch((err) => {
					alert(err.message);
				});
		}
	};

	return (
		<Wrapper>
			<div className="[ stack ] [ center-inner ]">
				<h1>Login</h1>
				<form
					action="/"
					// method="POST"
					className="[ stack ] [ center-inner ] [ margin-top-4 ]"
					onSubmit={formSubmitHandler}
				>
					<div className="border-title--wrapper">
						<input
							type="text"
							name="email"
							id="email"
							autoCapitalize="none"
							autoCorrect="off"
							required
							pattern="[^@]+@[^\.]+\..+"
							onChange={emailChangeHandler}
						/>
						<label className="border-title" htmlFor="email">
							Email
						</label>
					</div>

					<div className="border-title--wrapper">
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={passChangeHandler}
						/>
						<label className="border-title" htmlFor="password">
							Password
						</label>
					</div>

					<button className="[ button ]">Uloguj se</button>
				</form>
				<div
					aria-atomic="true"
					role="alert"
					className="[ signup-alert ] [ center ]"
				></div>
				<div>
					<p>Ne posedujes nalog?</p>
					<Link
						to="/login-register/register"
						className="[ color-red ]"
					>
						Registruj se ovde!
					</Link>
				</div>
			</div>
		</Wrapper>
	);
};

export default Login;
