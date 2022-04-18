import { useContext, useState } from 'react';
import Wrapper from '../components/UI/Wrapper';
import AuthContext from '../store/auth-context';

const UserProfile = () => {
	const authContext = useContext(AuthContext);
	const [newPass, setNewPass] = useState('');
	const changePassHandler = (e) => {
		setNewPass(e.target.value);
	};
	const newPassword = newPass;
	const formSubmitHandler = (e) => {
		e.preventDefault();
		fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCK5L9zhNN0e8AaK1swxU5Gpgh7shWWg3Q',
			{
				method: 'POST',
				body: JSON.stringify({
					idToken: authContext.token,
					password: newPassword,
					returnSecureToken: true,
				}),
				headers: { 'Content-Type': 'Application/JSON' },
			}
		)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					return response.json().then((data) => {
						let errorMessage = 'Change password failed';
						// if (data && data.error && data.error.message) {
						throw new Error(errorMessage);
						// }
					});
				}
			})
			.catch((err) => {
				alert(err.message);
			});
	};
	return (
		<Wrapper>
			<div className="[ center-inner ] [ stack ]">
				<h1>Profil</h1>
				<form
					action=""
					className="[ center-inner ][ stack ] [ margin-top-4 ]"
					onSubmit={formSubmitHandler}
				>
					<div className="border-title--wrapper">
						<input
							type="password"
							id="change-pass"
							onChange={changePassHandler}
						/>
						<label className="border-title" htmlFor="change-pass">
							Novi Password
						</label>
					</div>
					<button className="button">Potvrdi</button>
				</form>
			</div>
		</Wrapper>
	);
};

export default UserProfile;
