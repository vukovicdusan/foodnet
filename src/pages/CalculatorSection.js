import { useEffect, useReducer, useRef } from 'react';
import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import calculatorReducer from '../reducers/calculatorReducer';

const calculatorInitialState = {
	goal: { inputValue: 'suficit', valid: true, touched: false },
	gender: { inputValue: 'male', valid: true, touched: false },
	age: { inputValue: '', valid: false, touched: false, error: '' },
	height: { inputValue: '', valid: false, touched: false, error: '' },
	weight: { inputValue: '', valid: false, touched: false, error: '' },
	activity: { inputValue: 'unactive', valid: true, touched: false },
	pace: { inputValue: '0.3', valid: true, touched: false },
	result: {},
	formIsValid: false,
};
// error: 'Molimo unesite godine između 15 i 80.'
// error: 'Molimo unesite godine između 30kg i 250kg.'
// error: 'Molimo unesite visinu između 100cm i 250cm.'
const Calculator = () => {
	const [calculatorState, dispatch] = useReducer(
		calculatorReducer,
		calculatorInitialState
	);

	const calculatorResultRef = useRef();

	const inputHandler = (e) => {
		dispatch({
			type: 'CALCULATOR INPUT',
			payload: e.target.value,
			inputField: e.target.name,
		});
	};

	const blurHandler = (e) => {
		dispatch({
			type: 'BLUR',
			payload: e.target.value,
			inputField: e.target.name,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch({ type: 'VALIDATE FORM' });
		dispatch({
			type: 'RESULT',
		});

		console.log(calculatorState);
	};

	let finalValidationAge =
		!calculatorState.age.valid && calculatorState.age.touched;
	let finalValidationHeight =
		!calculatorState.height.valid && calculatorState.height.touched;
	let finalValidationWeight =
		!calculatorState.weight.valid && calculatorState.weight.touched;

	const scrollIntoView = () => {
		calculatorResultRef.current.scrollIntoView();
	};

	useEffect(() => {
		calculatorState.formIsValid && scrollIntoView();
	}, [calculatorState.formIsValid]);

	return (
		<Region background={'background-light'}>
			<Wrapper>
				<div className="[ calculator-section ] [ center-inner ] [ stack ]">
					<h1>Calculator</h1>
					<form
						onSubmit={submitHandler}
						className="[ stack ] [ center-inner ]"
						action=""
					>
						<div className="border-title--wrapper">
							<div className="select">
								<select
									onChange={inputHandler}
									id="calculator-goal"
									name="goal"
								>
									<option value="suficit">
										Kalorijski suficit
									</option>
									<option value="deficit">
										Kalorijski deficit
									</option>
									<option value="health">
										Održavanje i zdravlje
									</option>
								</select>
							</div>
							<label
								className="border-title"
								htmlFor="calculator-goal"
							>
								Cilj
							</label>
						</div>
						<div className="border-title--wrapper">
							<div className="select">
								<select
									onChange={inputHandler}
									id="calculator-gender"
									name="gender"
								>
									<option value="male">Muški</option>
									<option value="female">Ženski</option>
								</select>
							</div>
							<label
								className="border-title"
								htmlFor="calculator-gender"
							>
								Pol
							</label>
						</div>
						<div className="border-title--wrapper">
							<input
								onChange={inputHandler}
								onBlur={blurHandler}
								id="calculator-age"
								name="age"
								type="number"
								className={
									finalValidationAge ? 'input-error' : ''
								}
							/>
							<label
								className="border-title"
								htmlFor="calculator-age"
							>
								Godine
							</label>
						</div>
						<div className="border-title--wrapper">
							<input
								onChange={inputHandler}
								onBlur={blurHandler}
								id="calculator-weight"
								name="weight"
								type="number"
								className={
									finalValidationWeight ? 'input-error' : ''
								}
							/>
							<label
								className="border-title"
								htmlFor="calculator-weight"
							>
								Težina
							</label>
						</div>
						<div className="border-title--wrapper">
							<input
								onChange={inputHandler}
								onBlur={blurHandler}
								id="calculator-height"
								name="height"
								type="number"
								className={
									finalValidationHeight ? 'input-error' : ''
								}
							/>
							<label
								className="border-title"
								htmlFor="calculator-height"
							>
								Visina
							</label>
						</div>
						<div className="border-title--wrapper">
							<div className="select">
								<select
									onChange={inputHandler}
									id="calculator-activity"
									name="activity"
								>
									<option value="unactive">Neaktivan</option>
									<option value="light">
										Lagano aktivan
									</option>
									<option value="average">
										Srednje aktivan
									</option>
									<option value="very">Veoma aktivan</option>
									<option value="extreme">
										Ekstremno aktivan
									</option>
								</select>
							</div>
							<label
								className="border-title"
								htmlFor="calculator-activity"
							>
								Aktivnost
							</label>
						</div>
						<div className="border-title--wrapper">
							<div className="select">
								<select
									onChange={inputHandler}
									id="calculator-pace"
									name="pace"
								>
									<option value="0.3">Sporije</option>
									<option value="0.4">Srednje</option>
									<option value="0.85">Brže</option>
								</select>
							</div>
							<label
								className="border-title"
								htmlFor="calculator-pace"
							>
								Brzina
							</label>
						</div>
						<button className="button">Izračunaj</button>
						<div
							className={
								calculatorState.formIsValid
									? '[ stack ] [ center-inner ]'
									: '[ visually-hidden ] [ stack ] [ center-inner ]'
							}
							ref={calculatorResultRef}
						>
							<div className="dash-vertical-leading"></div>
							<div className="[ box ] [ dashed ]">
								<p>
									Kalorijski unos:
									<span className="color-red">
										{' ' +
											calculatorState.result.BMPFinal +
											' kcal' +
											''}
									</span>
								</p>
								<p>
									Unos proteina:
									<span className="color-red">
										{' ' +
											calculatorState.result
												.proteinPercentage +
											'g'}
									</span>
								</p>
								<p>
									Unos ugljenih hidrata:
									<span className="color-red">
										{' ' +
											calculatorState.result.carbsValue +
											'g'}
									</span>
								</p>
								<p>
									Unos masti:
									<span className="color-red">
										{' ' +
											calculatorState.result
												.fatPercentage +
											'g'}
									</span>
								</p>
							</div>
						</div>
					</form>
				</div>
				<div className="dash-vertical"></div>
			</Wrapper>
		</Region>
	);
};

export default Calculator;
