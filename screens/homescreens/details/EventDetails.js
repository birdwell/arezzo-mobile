import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class EventDetails extends Component {
	static propTypes = {
		navigation: PropTypes.shape({
			state: PropTypes.shape({
				params: PropTypes.shape({
					title: PropTypes.string
				})
			})
		})
	};
	
	render() {
		const { title } = this.props.navigation.state.params;
		return (
			<View>
				<Text>{ title }</Text>
			</View>
		);
	}
}

export default EventDetails;
