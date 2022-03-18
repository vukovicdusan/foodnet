import { useState } from 'react';

const useInput = (validateFunction) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateFunction(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const valueChangeHandler = (e) => {
		setEnteredValue(e.target.value);
	};

	const inputBlurHandler = (e) => {
		setIsTouched(true);
	};

	const reset = () => {
		console.log('reset');
		setEnteredValue('');
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError: hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
