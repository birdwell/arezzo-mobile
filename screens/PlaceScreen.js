// Props
// API Funct
// Path
import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Discovery from '../components/discovery/View';
import { getProp } from '../utils';


class PlaceScreen extends React.Component {
	// static navigationOptions = {
	// 	title: 'Food',
	// };

	state = {
		items: []
	}

	async componentWillMount() {
		try {
			const getItems = getProp('getItems', this.props);
			const items = await getItems();
			this.setState({ items });
		} catch (error) {
			this.setState({ error: 'Unable to get items.' });
		}
	}

	render() {
		const { items } = this.state;
		const { navigation: { navigate } } = this.props;
		const path = getProp('path', this.props);

		return (
			<Discovery items={items} navigate={navigate} path={path} />
		);
	}
}

PlaceScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	})
};

export default withNavigation(PlaceScreen);