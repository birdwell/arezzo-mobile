export const getProp = (prop, props) => {
	const navigation = props.navigation;
	return navigation && navigation.state.params[prop];
};
