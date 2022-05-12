import { useParams } from 'react-router-dom';
import profileImg1 from '../assets/css/img/profileImgs/1.jpg';
import profileImg2 from '../assets/css/img/profileImgs/2.jpg';
import profileImg3 from '../assets/css/img/profileImgs/3.jpg';
import profileImg4 from '../assets/css/img/profileImgs/4.jpg';
import profileImg5 from '../assets/css/img/profileImgs/5.jpg';
import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
let DUMMY_DATA = [
	{
		id: 1,
		name: 'Miljko Vlajković',
		type: 'Trener',
		image: profileImg1,
		price: 10,
		gender: 'male',
	},
	{
		id: 2,
		name: 'Vlajko Miljkovic',
		type: 'Nutricionista',
		image: profileImg2,
		price: 15,
		gender: 'male',
	},
	{
		id: 3,
		name: 'Milko Didic',
		type: 'Nutricionista',
		image: profileImg3,
		price: 10,
		gender: 'male',
	},
	{
		id: 4,
		name: 'Mara Sretenovic',
		type: 'Trener',
		image: profileImg4,
		price: 20,
		gender: 'female',
	},
	{
		id: 5,
		name: 'Saša Marinkovic',
		type: 'Trener',
		image: profileImg5,
		price: 5,
		gender: 'female',
	},
];
const SingleCoach = (props) => {
	const params = useParams();

	const singleCoach = DUMMY_DATA.find((coach) => coach.id == params.coachId);

	return (
		<Region
			regionClass={'single-coach--region'}
			background={'background-light'}
		>
			<Wrapper>
				<div className="switcher">
					<div className="[ single-coach--image-side ]">
						<div className="frame">
							<img src={singleCoach.image} alt="coach" />
						</div>
						<div className="[ stack ] [ margin-top-1 ]">
							<h4>{singleCoach.type}</h4>
							<p className="bold">{singleCoach.name}</p>
							<p className="color-red">
								{singleCoach.price} po terminu
							</p>
						</div>
					</div>
					<div className="[ single-coach--content-side ] [ stack ]">
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
