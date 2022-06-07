import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import CoachesContext from '../store/coaches-context';

const SingleCoach = (props) => {
	const params = useParams();
	const { coachesState } = useContext(CoachesContext);
	// let singleId = params.coachId;
	// console.log(params.coachId);
	const singleCoach = coachesState.find(
		(coach) => coach.id == params.coachId
	);

	return (
		<Region
			regionId={'single-coach--region'}
			background={'background-light'}
		>
			<Wrapper>
				<div className="[ switcher ] [ single-template ]">
					<div className="[ single-template--image-side ]">
						<div className="frame">
							<img src={singleCoach.image} alt="coach" />
						</div>
						<div className="[ stack ] [ margin-top-1 ]">
							<h4>
								{singleCoach.type.charAt(0).toUpperCase() +
									singleCoach.type.slice(1)}
							</h4>
							<p className="bold">{singleCoach.name}</p>
							<p className="color-red">
								{singleCoach.price}$ po terminu
							</p>
						</div>
					</div>
					<div className="[ single-template--content-side ] [ stack ]">
						<h1>{singleCoach.name}</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam arcu libero, maximus luctus ultricies
							eget, tincidunt tristique turpis. Duis nec nibh
							rhoncus, dictum tellus sed, auctor tortor. Sed ut
							tellus massa. Quisque lacinia nec nisi non
							porttitor. Ut facilisis, nisi eget pharetra sodales,
							arcu metus sodales mi, commodo laoreet justo orci in
							nisi.
						</p>
						<form action="" className="[ coach-message ] [ stack ]">
							{singleCoach.type.toLowerCase() === 'trener' ? (
								<h5>Poruka za trenera</h5>
							) : (
								<h5>Poruka za nutricionistu</h5>
							)}
							<div className="border-title--wrapper">
								<input
									id="coach-message--age"
									name="age"
									type="number"
								/>
								<label
									className="border-title"
									htmlFor="coach-message--age"
								>
									Godine
								</label>
							</div>
							<div className="border-title--wrapper">
								<div className="select">
									<select
										id="coach-message--gender"
										name="gender"
										type="text"
									>
										<option value="male">Muški</option>
										<option value="female">Ženski</option>
									</select>
									<label
										className="border-title"
										htmlFor="coach-message--gender"
									>
										Pol
									</label>
								</div>
							</div>
							<div className="border-title--wrapper">
								<div className="select">
									<select
										id="coach-message--goal"
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
									<label
										className="border-title"
										htmlFor="coach-message--goal"
									>
										Cilj
									</label>
								</div>
							</div>
							<button className="button">Pošalji</button>
						</form>
					</div>
				</div>
			</Wrapper>
		</Region>
	);
};

export default SingleCoach;
