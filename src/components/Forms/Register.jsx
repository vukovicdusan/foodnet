import { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../assets/firebase/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';
import { useReducer } from 'react';
import registerReducer from '../../reducers/registerReducer';
import chevron from '../../assets/css/img/chevron-down.svg';
import { useRef } from 'react';
// import { db } from '../assets/firebase/firebase';

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
	// gender: 'male',
	image: null,
	price: null,
	type: '',
	city: '',
	state: '',
};

const Register = (props) => {
	const [isLogin, setIsLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [registerError, setRegisterError] = useState(false);
	const [registerSuccess, setRegisterSuccess] = useState(false);
	const [accordionOpen, setAccordionOpen] = useState(false);
	const [consentState, setConsentState] = useState(false);

	//REFS
	const accordionRef = useRef();

	let collection = !consentState ? 'users' : 'coaches';

	//REDUCER
	const [coachState, dispatch] = useReducer(registerReducer, INITIAL_STATE);

	const inputHandler = (e) => {
		dispatch({
			type: 'REGISTER INPUT',
			payload: e.target.value,
			inputField: e.target.name,
		});
	};

	const formSubmitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				coachState.email,
				coachState.password
			);

			await setDoc(doc(db, collection, res.user.uid), {
				name: coachState.name,
				email: coachState.email,
				password: coachState.password,
				// gender: coachState.gender,
				image: coachState.image,
				price: coachState.price,
				type: coachState.type,
				city: coachState.city,
				state: coachState.state,
			});
			setIsLoading(false);
			setRegisterSuccess(true);
			setRegisterError(false);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
			setRegisterError(true);
		}
	};

	//FIREBASE STORAGE
	const storage = getStorage();
	const userImg = ref(storage, coachState.image);

	//ACCORDION
	const accordionToggle = (e) => {
		e.preventDefault();
		!accordionOpen ? setAccordionOpen(true) : setAccordionOpen(false);

		if (accordionRef.current.style.maxHeight) {
			accordionRef.current.style.maxHeight = null;
		} else {
			accordionRef.current.style.maxHeight =
				accordionRef.current.scrollHeight + 'px';
		}
	};

	return (
		<Fragment>
			<h1 className="[ center-inner ]">Registruj se</h1>
			<div id="register" className="[ stack ] [ center-inner ]">
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
							onChange={inputHandler}
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
							onChange={inputHandler}
						/>
					</div>

					{/* <div className="border-title--wrapper">
						<select
							name="gender"
							id="gender"
							autoCorrect="off"
							onChange={inputHandler}
						>
							<option value="male">Muški</option>
							<option value="female">Ženski</option>
						</select>
						<label className="border-title" htmlFor="gender">
							Pol
						</label>
					</div> */}

					<div className="border-title--wrapper">
						<label className="border-title" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={inputHandler}
						/>
					</div>

					<div className="border-title--wrapper">
						<label className="border-title" htmlFor="image">
							Postavi sliku
						</label>
						<input
							type="file"
							name="image"
							id="image"
							required
							onChange={inputHandler}
						/>
					</div>

					<div
						tabIndex="0"
						className={`[ accordion-toggle ] [ center ] [ card-button ] ${
							accordionOpen ? '[ accordion-open ]' : ''
						}`}
						onClick={accordionToggle}
					>
						<span className="with-icon">
							Registruj se kao trener/nutricionista
							<svg
								aria-hidden="true"
								focusable="false"
								className="icon"
							>
								<use href={chevron + '#chevron-down'}></use>
							</svg>
						</span>
					</div>
					<div
						ref={accordionRef}
						className={`[ accordion-content ] [ stack ] [ center-inner ] ${
							accordionOpen ? '[ accordion-open ]' : ''
						}`}
					>
						<div className="border-title--wrapper">
							<input
								type="text"
								name="city"
								id="city"
								autoCorrect="off"
								// required
								onChange={inputHandler}
							/>
							<label className="border-title" htmlFor="city">
								Grad
							</label>
						</div>
						<div className="border-title--wrapper">
							<input
								type="text"
								name="state"
								id="state"
								autoCorrect="off"
								// required
								onChange={inputHandler}
							/>
							<label className="border-title" htmlFor="state">
								Država
							</label>
						</div>
						<div className="border-title--wrapper">
							<select
								name="type"
								id="type"
								autoCorrect="off"
								onChange={inputHandler}
							>
								<option value="coach">Trener</option>
								<option value="nutricionist">
									Nutricionista
								</option>
								<option value="coach-nutricionist">
									Trener/Nutricionista
								</option>
							</select>
							<label className="border-title" htmlFor="type">
								Profesija
							</label>
						</div>
						<div className="border-title--wrapper">
							<input
								type="number"
								name="price"
								id="price"
								autoCorrect="off"
								onChange={inputHandler}
							/>
							<label className="border-title" htmlFor="price">
								Cena
							</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="consent"
								checked={consentState}
								onChange={() => {
									setConsentState(!consentState);
								}}
							/>
							<label htmlFor="consent">
								Potvrđujem da želim da se registrujem kao
								trener/nutricionista
							</label>
						</div>
					</div>

					<button className="[ button ]">Registruj se</button>
				</form>
				{registerError && (
					<div
						aria-atomic="true"
						role="alert"
						className="[ signup-alert ] [ center ]"
					>
						Korisnik već postoji. Pokušajte sa drugim mailom ili se
						ulogujte sa istim.
					</div>
				)}
				{registerSuccess && (
					<div
						aria-atomic="true"
						role="alert"
						className="[ signup-success ] [ center ]"
					>
						Registracija uspešna. Možete se ulogovati.
					</div>
				)}
				{isLoading ? <p className="color-red">Odmah stiže...</p> : ''}
				<div>
					<p>Već poseduješ nalog?</p>
					<Link to="/login-register/login" className="[ color-red ]">
						Uloguj se ovde!
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default Register;
