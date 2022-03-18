import Wrapper from '../components/UI/Wrapper'
import Register from '../components/Forms/Register'
import Login from '../components/Forms/Login'
import { Route } from 'react-router-dom'

const LoginRegister = () => {
	return (
		<Wrapper>
			<Route path="/login-register/login">
				<Login></Login>
			</Route>
			<Route path="/login-register/register">
				<Register></Register>
			</Route>
		</Wrapper>
	)
}

export default LoginRegister
