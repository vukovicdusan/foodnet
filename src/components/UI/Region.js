const Region = (props) => {
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
