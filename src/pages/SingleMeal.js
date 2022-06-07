import Wrapper from '../components/UI/Wrapper';
import Region from '../components/UI/Region';
import mealImg1 from '../assets/css/img/mealImgs/mealImg1.jpg';
import mealImg2 from '../assets/css/img/mealImgs/mealImg2.jpg';
import mealImg3 from '../assets/css/img/mealImgs/mealImg3.jpg';
import mealImg4 from '../assets/css/img/mealImgs/mealImg4.jpg';
import mealImg5 from '../assets/css/img/mealImgs/mealImg5.jpg';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const DUMMY_MEALS = [
	{
		id: 1,
		name: 'Prženice sa borovnicama',
		type: 'Doručak',
		image: mealImg1,
		price: 10,
	},
	{
		id: 2,
		name: 'Barena jaja sa povrćem',
		type: 'Doručak',
		image: mealImg2,
		price: 15,
	},
	{
		id: 3,
		name: 'Fit pica',
		type: 'Večera',
		image: mealImg3,
		price: 10,
	},
	{
		id: 4,
		name: 'Fit činija',
		type: 'Ručak',
		image: mealImg4,
		price: 20,
	},
	{
		id: 5,
		name: 'Biftek sa povrćem',
		type: 'Ručak',
		image: mealImg5,
		price: 15,
	},
];

const SingleMeal = () => {
	const params = useParams();
	// console.log(params.mealId);
	let singleMeal = DUMMY_MEALS.find((meal) => meal.id == params.mealId);
	return (
		<Region
			regionId={'single-meal--region'}
			background={'background-light'}
		>
			<Wrapper>
				<div className="[ switcher ] [ single-template ]">
					<div className="[ single-template--image-side ]">
						<div className="frame">
							<img src={singleMeal.image} alt="template" />
						</div>
						<div className="[ stack ] [ margin-top-1 ]">
							<h4>
								{singleMeal.type.charAt(0).toUpperCase() +
									singleMeal.type.slice(1)}
							</h4>
							<p className="bold">{singleMeal.name}</p>
							<p className="color-red">
								{singleMeal.price}$ po obroku
							</p>
						</div>
					</div>
					<div className="[ single-template--content-side ] [ stack ]">
						<h1>{singleMeal.name}</h1>
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
					</div>
				</div>
			</Wrapper>
		</Region>
	);
};

export default SingleMeal;
