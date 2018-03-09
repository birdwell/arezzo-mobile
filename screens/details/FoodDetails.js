import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class FoodDetails extends Component {
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
		const { state } = this.props.navigation;
		const { params: { item }} = state;
		const { title } = item;

		return (
			<View>
				<Text>{title}</Text>
			</View>
		);
	}
}

export default FoodDetails;
