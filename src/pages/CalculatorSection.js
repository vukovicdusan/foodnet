import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';

const Calculator = () => {
	return (
		<Region background={'background-light'}>
			<Wrapper>
				<div className="[ calculator-section ] [ center-inner ] [ stack ]">
					<h1>Calculator</h1>
					<form className="[ stack ] [ center-inner ]" action="">
						<div className="border-title--wrapper">
							<select id="calculator-goal" name="goal">
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
							<label
								className="border-title"
								htmlFor="calculator-goal"
							>
								Cilj
							</label>
						</div>
						<div className="border-title--wrapper">
							<select id="calculator-gender" name="gender">
								<option value="male">Muški</option>
								<option value="female">Ženski</option>
							</select>
							<label
								className="border-title"
								htmlFor="calculator-gender"
							>
								Pol
							</label>
						</div>
						<div className="border-title--wrapper">
							<input
								id="calculator-age"
								name="age"
								type="number"
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
								id="calculator-weight"
								name="weight"
								type="number"
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
								id="calculator-height"
								name="height"
								type="number"
							/>
							<label
								className="border-title"
								htmlFor="calculator-height"
							>
								Visina
							</label>
						</div>
						<div className="border-title--wrapper">
							<select id="calculator-activity" name="activity">
								<option value="unactive">Neaktivan</option>
								<option value="light">Lagano aktivan</option>
								<option value="average">Srednje aktivan</option>
								<option value="very">Veoma aktivan</option>
								<option value="extreme">
									Ekstremno aktivan
								</option>
							</select>
							<label
								className="border-title"
								htmlFor="calculator-activity"
							>
								Aktivnost
							</label>
						</div>
						<div className="border-title--wrapper">
							<select id="calculator-pace" name="pace">
								<option value="slow">Sporije</option>
								<option value="medium">Srednje</option>
								<option value="fast">Brže</option>
							</select>
							<label
								className="border-title"
								htmlFor="calculator-pace"
							>
								Brzina
							</label>
						</div>
						<button className="button">Izračunaj</button>
					</form>
				</div>
				<div className="dash-vertical"></div>
			</Wrapper>
		</Region>
	);
};

export default Calculator;
