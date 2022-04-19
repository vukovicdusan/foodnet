const calculatorReducer = (state, action) => {
	let returnStatementValid = {
		...state,
		[action.inputField]: {
			inputValue: action.payload,
			valid: true,
			touched: false,
		},
	};
	let returnStatementInvalid = {
		...state,
		[action.inputField]: {
			inputValue: action.payload,
			valid: false,
			touched: false,
		},
	};
	switch (action.type) {
		case 'CALCULATOR INPUT':
			const isNotEmpty = action.payload.trim() !== '';

			switch (action.inputField) {
				case 'age': {
					if (
						isNotEmpty &&
						action.payload.trim() > 15 &&
						action.payload.trim() < 100
					) {
						return returnStatementValid;
					} else {
						return returnStatementInvalid;
					}
				}

				case 'height': {
					if (
						isNotEmpty &&
						action.payload.trim() > 100 &&
						action.payload.trim() < 250
					) {
						return returnStatementValid;
					} else {
						return returnStatementInvalid;
					}
				}

				case 'weight': {
					if (
						isNotEmpty &&
						action.payload.trim() > 30 &&
						action.payload.trim() < 200
					) {
						return returnStatementValid;
					} else {
						return returnStatementInvalid;
					}
				}
				default:
					return {
						...state,
						[action.inputField]: {
							inputValue: action.payload,
							valid: true,
							touched: false,
						},
					};
			}
		case 'BLUR': {
			const {
				age: { inputValue: ageInput, valid: ageValid },
				weight: { inputValue: weightInput, valid: weightValid },
				height: { inputValue: heightInput, valid: heightValid },
			} = state;
			switch (action.inputField) {
				case 'age': {
					return {
						...state,
						[action.inputField]: {
							inputValue: ageInput,
							valid: ageValid,
							touched: true,
						},
					};
				}
				case 'weight': {
					return {
						...state,
						[action.inputField]: {
							inputValue: weightInput,
							valid: weightValid,
							touched: true,
						},
					};
				}
				case 'height': {
					return {
						...state,
						[action.inputField]: {
							inputValue: heightInput,
							valid: heightValid,
							touched: true,
						},
					};
				}
				default:
					return {
						...state,
						[action.inputField]: {
							inputValue: action.payload,
							valid: true,
							touched: true,
						},
					};
			}
		}

		case 'VALIDATE FORM':
			//*state destructuring
			const {
				age: { inputValue: ageInput, valid: ageValid },
				height: { inputValue: heightInput, valid: heightValid },
				weight: { inputValue: weightInput, valid: weightValid },
			} = state;
			const validArr = [ageValid, heightValid, weightValid];
			const isFalse = validArr.some((element) => element === false);

			return isFalse
				? {
						...state,
						age: {
							inputValue: ageInput,
							valid: ageValid,
							touched: true,
						},
						height: {
							inputValue: heightInput,
							valid: heightValid,
							touched: true,
						},
						weight: {
							inputValue: weightInput,
							valid: weightValid,
							touched: true,
						},

						formIsValid: false,
				  }
				: {
						...state,

						formIsValid: true,
				  };

		case 'RESULT': {
			const {
				goal: { inputValue: goalInput },
				gender: { inputValue: genderInput },
				age: { inputValue: ageInput },
				height: { inputValue: heightInput },
				weight: { inputValue: weightInput },
				activity: { inputValue: activityInput },
				pace: { inputValue: paceInput },
			} = state;
			//*calculations

			//*protein
			let protein = 0;
			switch (activityInput) {
				case 'unactive':
					protein = 1.5;
					break;
				case 'average':
					protein = 1.8;
					break;
				default:
					protein = 2;
			}

			if (goalInput === 'deficit') {
				protein += 0.2;
			}

			//*ideal weight
			let idealFat = heightInput - 100;
			let idealProtein;
			let fat;
			if (genderInput === 'male') {
				idealProtein = heightInput - 80;
				fat = 0.8;
			} else {
				idealProtein = heightInput - 90;
				fat = 1;
			}

			//* daily changes depending on the pace

			let dailyChange = weightInput * paceInput * 10;

			let dailyFatChange = dailyChange * 0.713 * 0.87 * 9;
			let dailyTissueChange = dailyChange * 0.287 * 0.3 * 4;
			let change = (dailyFatChange + dailyTissueChange) / 7;

			if (goalInput === 'health') change = 0;

			//* result
			let BMP;
			if (genderInput === 'male') {
				BMP =
					66.5 +
					13.75 * weightInput +
					5.003 * heightInput -
					6.775 * ageInput;
			} else {
				BMP =
					655.1 +
					9.563 * weightInput +
					1.85 * heightInput -
					4.676 * ageInput;
			}

			//*BMP depending on the activity level
			switch (activityInput) {
				case 'unactive':
					BMP *= 1.15;
					break;
				case 'light':
					BMP *= 1.275;
					break;
				case 'average':
					BMP *= 1.4;
					break;
				case 'very':
					BMP *= 1.525;
					break;
				case 'extreme':
					BMP *= 1.65;
					break;
				default:
			}
			let BMPActive = BMP;

			//*BMP depending on the goal
			switch (goalInput) {
				case 'suficit':
					BMPActive += change;
					break;
				case 'deficit':
					BMPActive -= change;
					break;
				case 'health':
					// BMPActive = BMPActive;
					break;
				default:
			}

			//*Final BMP
			let BMPFinal = Math.floor(BMPActive);

			let fatPercentage = Math.floor(idealFat * fat);
			let proteinPercentage = Math.floor(idealProtein * protein);

			let fatValue = fatPercentage * 9;
			let proteinValue = proteinPercentage * 4;
			let carbsValue = Math.floor(
				(BMPFinal - fatValue - proteinValue) / 4
			);

			return {
				...state,
				result: {
					BMPFinal,
					proteinPercentage,
					carbsValue,
					fatPercentage,
				},
			};
		}
		default:
			return state;
	}
};

export default calculatorReducer;
