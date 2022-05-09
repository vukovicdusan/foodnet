const Region = (props) => {
	//class for the region component if some of the properties have to be overriden.
	//background collor for the region component
	let regionClass = '';
	if (typeof props.regionClass !== 'undefined') {
		regionClass = props.regionClass;
	} else {
		regionClass = '';
	}
	return (
		<article
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
		</article>
	);
};

export default Region;
