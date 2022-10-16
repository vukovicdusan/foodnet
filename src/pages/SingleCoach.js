import { useParams } from 'react-router-dom';
import Region from '../components/UI/Region';
import Wrapper from '../components/UI/Wrapper';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../assets/firebase/firebase';
import { useEffect, useState } from 'react';

const SingleCoach = (props) => {
	const params = useParams();
	const [singleCoach, setSingleCoach] = useState({});

	useEffect(() => {
		let coach = {};
		try {
			const loadSingleCoach = async () => {
				const docRef = doc(db, 'coaches', params.coachId);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					console.log(docSnap.data());
					Object.assign(coach, docSnap.data());
					setSingleCoach(coach);
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			};
			loadSingleCoach();
		} catch (err) {
			console.log(err);
		}
	}, []);
	// console.log(singleCoach.name);
	return (
		<Region
			regionClass={'single-coach--region'}
			background={'background-light'}
		>
			<Wrapper>
				<div className="switcher">
					<div className="[ single-coach--image-side ]">
						<div className="frame">
							<img src={singleCoach?.image} alt="coach" />
						</div>
						<div className="[ stack ] [ margin-top-1 ]">
							<h4>{singleCoach?.type}</h4>
							<p className="bold">{singleCoach.name}</p>
							<p className="color-red">
								{singleCoach?.price} po terminu
							</p>
						</div>
					</div>
					<div className="[ single-coach--content-side ] [ stack ]">
						<h1>{singleCoach?.name}</h1>
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
							{singleCoach.type?.toLowerCase() === 'trener' ? (
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
