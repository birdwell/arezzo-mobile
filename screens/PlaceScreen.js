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

	componentWillMount() {
		const getItems = getProp('getItems', this.props);
		getItems()
			.then(items => {
				this.setState({ items });
			})
			.catch(() => {
				this.setState({ error: 'Unable to get events.' });
			});
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