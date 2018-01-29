import React, { Component } from 'react';
import { View } from 'react-native';
import Map from './map/Map';

class Discovery extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Map />
			</View>
		);
	}
}

export default Discovery;