const Region = (props) => {
	return (
		<div className={'[ region ]' + '[ ' + props.background + ' ]'}>
			{props.children}
		</div>
	);
};

export default Region;
