const Region = (props) => {
	//class for the region component if some of the properties have to be overriden.
	//background collor for the region component
	let regionClass = '';
	if (typeof props.class !== 'undefined') {
		regionClass = props.class;
	} else {
		regionClass = '';
	}
	return (
		<div
			className={
				'[ region ]' +
				'[ ' +
				props.background +
				' ]' +
				'[ ' +
				regionClass +
				' ]'
			}
		>
			{props.children}
		</div>
	);
};

export default Region;
