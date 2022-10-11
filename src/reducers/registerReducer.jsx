const registerReducer = (state, action) => {
	switch (action.type) {
		case 'REGISTER INPUT':
			switch (action.inputField) {
				case 'name':
					return { ...state, name: action.payload };
				case 'email':
					return { ...state, email: action.payload };
				case 'password':
					return { ...state, password: action.payload };
				// case 'gender':
				// 	return { ...state, gender: action.payload };
				case 'image':
					return { ...state, image: action.payload };
				case 'price':
					return { ...state, price: action.payload };
				case 'type':
					return { ...state, type: action.payload };
				case 'city':
					return { ...state, city: action.payload };
				case 'state':
					return { ...state, state: action.payload };
				default:
					return state;
			}

		// return;
		default:
			return;
	}
};

export default registerReducer;
