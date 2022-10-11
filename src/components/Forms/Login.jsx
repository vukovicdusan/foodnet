import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../assets/firebase/firebase';

import AuthContext from '../../store/AuthContext';
import Wrapper from '../UI/Wrapper';

const Login = (props) => {
	const [isLogin, setIsLogin] = useState(false);
	const [emailValue, setEmailValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const [loginError, setLoginError] = useState(false);

	const authContext = useContext(AuthContext);

	const emailChangeHandler = (e) => {
		setEmailValue(e.target.value);
	};

	const passChangeHandler = (e) => {
		setPassValue(e.target.value);
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, emailValue, passValue)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// authContext.login(user.accessToken);
				authContext.dispatch({
					type: 'LOGIN',
					payload: user,
				});
				setLoginError(false);
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				setLoginError(true);
			});
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
				{loginError && (
					<div
						aria-atomic="true"
						role="alert"
						className="[ signup-alert ] [ center ]"
					>
						Pogresan username ili password. Pokusajte ponovo.
					</div>
				)}
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
