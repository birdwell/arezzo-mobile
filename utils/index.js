export const getProp = (prop, props) => {
	if (!props.navigation || !props.navigation.state || !props.navigation.state.params) { return null; }

	const params = props.navigation.state.params;

	return params[prop];
};

export const getProps = (x) => {
	if (!x.navigation || !x.navigation.state || !x.navigation.state.params) { return {}; }
	return x.navigation.state.params;
};

export const getImage = (item) => {
	if (!item) { return null; }

	if (item.images && item.images.length > 0) {
		return item.images[0].secure_url;
	} else {
		return null;
	}
};