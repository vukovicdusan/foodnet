const calculatorReducer = (state, action) => {
	switch (action.type) {
		// case 'CALCULATOR INPUT':
		// 	if (action.payload.trim() !== '') {
		// 		return {
		// 			...state,
		// 			[action.inputField]: {
		// 				inputValue: action.payload,
		// 				valid: true,
		// 				touched: false,
		// 			},
		// 		};
		// 	} else {
		// 		return {
		// 			...state,
		// 			[action.inputField]: {
		// 				inputValue: action.payload,
		// 				valid: false,
		// 				touched: false,
		// 			},
		// 		};
		// 	}
		case 'GOAL':
			return action.payload.trim() !== ''
				? {
						...state,
						goal: {
							inputValue: action.payload,
							touched: true,
							valid: true,
						},
				  }
				: {
						...state,
						goal: {
							inputValue: action.payload,
							touched: true,
							valid: false,
						},
				  };
		case 'GENDER':
			return action.payload.trim() !== ''
				? {
						...state,
						gender: {
							inputValue: action.payload,
							touched: true,
							valid: true,
						},
				  }
				: {
						...state,
						gender: {
							inputValue: action.payload,
							touched: true,
							valid: false,
						},
				  };
		case 'AGE':
			let ageValue = action.payload.trim();
			return ageValue !== '' && ageValue > 15 && ageValue < 80
				? {
						...state,
						age: {
							inputValue: action.payload,
							touched: true,
							valid: true,
						},
				  }
				: {
						...state,
						age: {
							inputValue: action.payload,
							touched: true,
							valid: false,
						},
				  };
		case 'HEIGHT':
			let heightValue = action.payload.trim();
			return heightValue !== '' && heightValue > 100 && heightValue < 250
				? {
						...state,
						height: {
							inputValue: action.payload,
							touched: true,
							valid: true,
						},
				  }
				: {
						...state,
						height: {
							inputValue: action.payload,
							touched: true,
							valid: false,
						},
				  };
		case 'WEIGHT':
			let weightValue = action.payload.trim();
			return weightValue !== '' && weightValue > 30 && weightValue < 200
				? {
						...state,
						weight: {
							inputValue: action.payload,
							touched: true,
							valid: true,
						},
				  }
				: {
						...state,
						weight: {
							inputValue: action.payload,
							touched: true,
							valid: false,
						},
				  };
		case 'ACTIVITY':
			return action.payload.trim() !== ''
				? {
						...state,
						activity: {
							inputValue: action.payload,
							touched: true,
							valid: true,
						},
				  }
				: {
						...state,
						activity: {
							inputValue: action.payload,
							touched: true,
							valid: false,
						},
				  };
		case 'PACE':
			return action.payload.trim() !== ''
				? {
						...state,
						pace: {
							inputValue: action.payload,
							touched: true,
							valid: true,
						},
				  }
				: {
						...state,
						pace: {
							inputValue: action.payload,
							touched: true,
							valid: false,
						},
				  };

		case 'BLUR':
			return { ...state };
		// return action.payload.trim() === ''
		// 	? {
		// 			...state,
		// 			[action.inputField]: {
		// 				// inputValue: action.payload,
		// 				valid: false,
		// 				touched: true,
		// 			},
		// 	  }
		// 	: {
		// 			...state,
		// 			[action.inputField]: {
		// 				inputValue: action.payload,
		// 				valid: true,
		// 				touched: true,
		// 			},
		// 	  };
		// case 'VALIDATE FORM':
		// 	//*form validation
		// 	const validArr = [];
		// 	const isFalse = (element) => element === false;
		// 	for (const [key, value] of Object.entries(state)) {
		// 		validArr.push(value.valid);
		// 	}

		// 	//*state destructuring
		// 	const {
		// 		goal: { inputValue: goalInput, valid: goalValid },
		// 		gender: { inputValue: genderInput, valid: genderValid },
		// 		age: { inputValue: ageInput },
		// 		height: { inputValue: heightInput },
		// 		weight: { inputValue: weightInput },
		// 		activity: { inputValue: activityInput, valid: activityValid },
		// 		pace: { inputValue: paceInput, valid: paceValid },
		// 	} = state;

		// 	//*age,height,weight validation
		// 	let ageValueTrue = ageInput < 80 && ageInput > 15;
		// 	let heightValueTrue = heightInput < 250 && heightInput > 100;
		// 	let weightValueTrue = weightInput < 200 && weightInput > 30;

		// 	return isFalse
		// 		? {
		// 				goal: {
		// 					inputValue: goalInput,
		// 					valid: goalValid,
		// 					touched: true,
		// 				},
		// 				gender: {
		// 					inputValue: genderInput,
		// 					valid: genderValid,
		// 					touched: true,
		// 				},
		// 				age: {
		// 					inputValue: ageInput,
		// 					valid: ageValueTrue,
		// 					touched: true,
		// 				},
		// 				height: {
		// 					inputValue: heightInput,
		// 					valid: heightValueTrue,
		// 					touched: true,
		// 				},
		// 				weight: {
		// 					inputValue: weightInput,
		// 					valid: weightValueTrue,
		// 					touched: true,
		// 				},
		// 				activity: {
		// 					inputValue: activityInput,
		// 					valid: activityValid,
		// 					touched: true,
		// 				},
		// 				pace: {
		// 					inputValue: paceInput,
		// 					valid: paceValid,
		// 					touched: true,
		// 				},
		// 				// showResult: false,
		// 				formIsValid: false,
		// 		  }
		// 		: {
		// 				state,
		// 				// showResult: true,
		// 				formIsValid: true,
		// 		  };
		// 	break;
		// case 'RESULT': {
		// 	const {
		// 		goal: { inputValue: goalInput },
		// 		gender: { inputValue: genderInput },
		// 		age: { inputValue: ageInput },
		// 		height: { inputValue: heightInput },
		// 		weight: { inputValue: weightInput },
		// 		activity: { inputValue: activityInput },
		// 		pace: { inputValue: paceInput },
		// 	} = state;
		// 	//*calculations

		// 	//*protein
		// 	let protein = 0;
		// 	switch (activityInput) {
		// 		case 'unactive':
		// 			protein = 1.5;
		// 			break;
		// 		case 'average':
		// 			protein = 1.8;
		// 			break;
		// 		default:
		// 			protein = 2;
		// 	}

		// 	if (goalInput === 'deficit') {
		// 		protein += 0.2;
		// 	}

		// 	//*ideal weight
		// 	let idealFat = heightInput - 100;
		// 	let idealProtein;
		// 	let fat;
		// 	if (genderInput === 'male') {
		// 		idealProtein = heightInput - 80;
		// 		fat = 0.8;
		// 	} else {
		// 		idealProtein = heightInput - 90;
		// 		fat = 1;
		// 	}

		// 	//* daily changes depending on the pace

		// 	let dailyChange = weightInput * paceInput * 10;

		// 	let dailyFatChange = dailyChange * 0.713 * 0.87 * 9;
		// 	let dailyTissueChange = dailyChange * 0.287 * 0.3 * 4;
		// 	let change = (dailyFatChange + dailyTissueChange) / 7;

		// 	if (goalInput === 'health') change = 0;

		// 	//* result
		// 	let BMP;
		// 	if (genderInput === 'male') {
		// 		BMP =
		// 			66.5 +
		// 			13.75 * weightInput +
		// 			5.003 * heightInput -
		// 			6.775 * ageInput;
		// 	} else {
		// 		BMP =
		// 			655.1 +
		// 			9.563 * weightInput +
		// 			1.85 * heightInput -
		// 			4.676 * ageInput;
		// 	}

		// 	//*BMP depending on the activity level
		// 	switch (activityInput) {
		// 		case 'unactive':
		// 			BMP *= 1.15;
		// 			break;
		// 		case 'light':
		// 			BMP *= 1.275;
		// 			break;
		// 		case 'average':
		// 			BMP *= 1.4;
		// 			break;
		// 		case 'very':
		// 			BMP *= 1.525;
		// 			break;
		// 		case 'extreme':
		// 			BMP *= 1.65;
		// 			break;
		// 		default:
		// 	}
		// 	let BMPActive = BMP;

		// 	//*BMP depending on the goal
		// 	switch (goalInput) {
		// 		case 'suficit':
		// 			BMPActive += change;
		// 			break;
		// 		case 'deficit':
		// 			BMPActive -= change;
		// 			break;
		// 		case 'health':
		// 			// BMPActive = BMPActive;
		// 			break;
		// 		default:
		// 	}

		// 	//*Final BMP
		// 	let BMPFinal = Math.floor(BMPActive);

		// 	let fatPercentage = Math.floor(idealFat * fat);
		// 	let proteinPercentage = Math.floor(idealProtein * protein);

		// 	let fatValue = fatPercentage * 9;
		// 	let proteinValue = proteinPercentage * 4;
		// 	let carbsValue = Math.floor(
		// 		(BMPFinal - fatValue - proteinValue) / 4
		// 	);

		// 	return {
		// 		...state,
		// 		result: {
		// 			BMPFinal,
		// 			proteinPercentage,
		// 			carbsValue,
		// 			fatPercentage,
		// 		},
		// 	};
		// }
		default:
			return state;
	}
};

export default calculatorReducer;
