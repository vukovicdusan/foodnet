import { useContext, useState } from 'react';
import Wrapper from '../components/UI/Wrapper';
import AuthContext from '../store/AuthContext';
// import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
// import { db } from '../assets/firebase/firebase';

const UserProfile = () => {
	const authContext = useContext(AuthContext);
	// const [dbError, setDbError] = useState('');

	const changePassHandler = (e) => {};
	const addCoachHandler = async (e) => {
		e.preventDefault();
		// try {
		// 	const res = await addDoc(collection(db, 'kurabi'), {
		// 		name: 'jedan mali kurab',
		// 		state: 'CA',
		// 		country: 'USA',
		// 	});
		// } catch (err) {
		// 	setDbError(err);
		// 	console.log(err);
		// }
	};

	return (
		<Wrapper>
			<div className="[ center-inner ] [ stack ]">
				<h1>Profil</h1>
				<form
					action=""
					className="[ center-inner ][ stack ] [ margin-top-4 ]"
					onSubmit={addCoachHandler}
				>
					{/* <div className="border-title--wrapper">
						<input
							type="password"
							id="change-pass"
							onChange={changePassHandler}
						/>
						<label className="border-title" htmlFor="change-pass">
							Novi Password
						</label>
					</div> */}
					<button className="button">Potvrdi</button>
				</form>
			</div>
		</Wrapper>
	);
};

export default UserProfile;
