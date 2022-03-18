import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
	const [isLogin, setIsLogin] = useState(false);
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [passInput, setPassInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const nameInputHandler = (e) => {
		console.log(e.target.value);
		setNameInput(e.target.value);
	};

	const emailInputHandler = (e) => {
		setEmailInput(e.target.value);
	};

	const passInputHandler = (e) => {
		setPassInput(e.target.value);
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();

		setIsLoading(true);
		if (isLogin) {
		} else {
			fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCK5L9zhNN0e8AaK1swxU5Gpgh7shWWg3Q',
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
			).then((res) => {
				setIsLoading(false);
				if (res.ok) {
				} else {
					return res.json().then((data) => {
						let errorMessage = 'Authentication Failed';
						if (data && data.error && data.error.message) {
							errorMessage = data.error.message;
						}
						alert(errorMessage);
					});
				}
			});
		}
	};

	const name = nameInput;
	const email = emailInput;
	const pass = passInput;

	return (
		<Fragment>
			<h1 className="[ center-inner ]">Registruj se</h1>
			<div className="[ stack ] [ center-inner ]">
				<form
					action="/"
					className="[ stack ] [ center-inner ] [ margin-top-4 ]"
					onSubmit={formSubmitHandler}
				>
					<div className="border-title--wrapper">
						<input
							type="text"
							name="name"
							id="name"
							autoCorrect="off"
							required
							onChange={nameInputHandler}
						/>
						<label className="border-title" htmlFor="name">
							Ime
						</label>
					</div>

					<div className="border-title--wrapper">
						<label className="border-title" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							autoCapitalize="none"
							autoCorrect="off"
							required
							pattern="[^@]+@[^\.]+\..+"
							onChange={emailInputHandler}
						/>
					</div>

					<div className="border-title--wrapper">
						<label className="border-title" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={passInputHandler}
						/>
					</div>

					{/* <div className="border-title--wrapper">
						<label className="border-title" htmlFor="password-rpt">
							Ponovi Password
						</label>
						<input
							type="password"
							name="password"
							id="password-rpt"
							required
						/>
					</div> */}

					<button className="[ button ]">Registruj se</button>
				</form>
				<div
					aria-atomic="true"
					role="alert"
					className="[ signup-alert ] [ center ]"
				></div>
				{isLoading ? <p className="color-red">Odmah stiže...</p> : ''}
				<div>
					<p>Vec posedujes nalog?</p>
					<Link to="/login-register/login" className="[ color-red ]">
						Uloguj se ovde!
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default Register;
