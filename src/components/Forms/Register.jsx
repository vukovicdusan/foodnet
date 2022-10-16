import { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db, storage } from '../../assets/firebase/firebase';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import { useReducer } from 'react';
import registerReducer from '../../reducers/registerReducer';
import chevron from '../../assets/css/img/chevron-down.svg';
import { useRef } from 'react';
import Region from '../UI/Region';
import Wrapper from '../UI/Wrapper';

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
	// gender: 'male',
	image: 'untouched',
	price: null,
	type: 'trener',
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
	const [imageUrl, setImageUrl] = useState('');

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

	const imgInputHandler = (e) => {
		dispatch({
			type: 'IMAGE INPUT',
			payload: e.target.files[0],
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

			if (coachState.image === 'untouched') {
				await setDoc(doc(db, collection, res.user.uid), {
					name: coachState.name,
					email: coachState.email,
					password: coachState.password,
					// gender: coachState.gender,
					image: 'no image',
					price: coachState.price,
					type: coachState.type,
					city: coachState.city,
					state: coachState.state,
				});
				setIsLoading(false);
				setRegisterSuccess(true);
				setRegisterError(false);
			} else {
				const imgNewName = new Date().getTime() + coachState.image.name;
				const storageRef = ref(storage, imgNewName);
				const uploadTask = uploadBytesResumable(
					storageRef,
					coachState.image
				);
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) *
							100;
						console.log('Upload is ' + progress + '% done');
						switch (snapshot.state) {
							case 'paused':
								console.log('Upload is paused');
								break;
							case 'running':
								console.log('Upload is running');
								break;
							default:
								break;
						}
					},
					(error) => {
						console.log(error);
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then(
							async (downloadURL) => {
								// dispatch({
								// 	type: 'IMAGE URL',
								// 	payload: downloadURL,
								// });
								// setImageUrl(downloadURL);

								await setDoc(
									doc(db, collection, res.user.uid),
									{
										name: coachState.name,
										email: coachState.email,
										password: coachState.password,
										// gender: coachState.gender,
										image: downloadURL,
										price: coachState.price,
										type: coachState.type,
										city: coachState.city,
										state: coachState.state,
									}
								);
								setIsLoading(false);
								setRegisterSuccess(true);
								setRegisterError(false);
								setImageUrl(downloadURL);
							}
						);
					}
				);
			}
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
			setRegisterError(true);
			setRegisterSuccess(false);
			setIsLoading(false);
		}
	};
	// console.log(coachState.image);

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

	// console.log(coachState.image && coachState.image.split('\\')[2]);
	return (
		<Region regionClass={'register-region'}>
			<Wrapper>
				<h1 className="[ center-inner ]">Registruj se</h1>
				<div
					id="register"
					className="[ stack ] [ center-inner ] [ margin-top-4 ]"
				>
					<form
						action="/"
						className="[ stack ] [ center-inner ]"
						onSubmit={formSubmitHandler}
					>
						{imageUrl !== '' && (
							<div className="profile-img--container">
								<div className="frame">
									<img src={imageUrl} alt="coach" />
								</div>
							</div>
						)}
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
								onChange={imgInputHandler}
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
									<option value="trener">Trener</option>
									<option value="nutricionista">
										Nutricionista
									</option>
									<option value="trener & nutricionista">
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
							Korisnik već postoji. Pokušajte sa drugim mailom ili
							se ulogujte sa istim.
						</div>
					)}
					{registerSuccess && (
						<div
							aria-atomic="true"
							role="alert"
							className="[ signup-success ] [ center ]"
						>
							Registracija uspešna. Možete se ulogovati{' '}
							<Link
								to="/login-register/login"
								className="[ color-red ]"
							>
								ovde!
							</Link>
						</div>
					)}

					{isLoading ? (
						<div className="[ loader-container ]">
							<p className="[ color-red ]">Odmah stiže</p>{' '}
							<div className="dot-pulse"></div>
						</div>
					) : (
						''
					)}
					<div>
						<p>Već poseduješ nalog?</p>
						<Link
							to="/login-register/login"
							className="[ color-red ]"
						>
							Uloguj se ovde!
						</Link>
					</div>
				</div>
			</Wrapper>
		</Region>
	);
};

export default Register;
