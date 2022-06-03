import Wrapper from '../components/UI/Wrapper';
import Register from '../components/Forms/Register';
import Login from '../components/Forms/Login';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth-context';

const LoginRegister = () => {
	const authContext = useContext(AuthContext);
	return (
		<Wrapper>
			<Route path="/login-register/login">
				<Login></Login>
			</Route>
			<Route path="/login-register/register">
				<Register></Register>
			</Route>
			{authContext.isLoggedIn && (
				<Route>
					<Redirect to="/home"></Redirect>
				</Route>
			)}
		</Wrapper>
	);
};

export default LoginRegister;
