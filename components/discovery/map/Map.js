import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Marker } from 'react-native-maps';

class Map extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	getInitialState() {
		return {
			region: {
				// OU campus
				latitude: 35.208611,
				longitude: -97.445833,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}
		};
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	render() {
		return (
			<MapView
				style={styles.map}
				region={this.state.region}
				initialRegion={{
				latitude: 35.208611,
				longitude: -97.445833,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
				}}
			>
			<MapView.Marker
				coordinate={{
					latitude: 35.21075,
					longitude: -97.4418,
				}}
				title={"Arezzo Demo"}
				description={"2/8/18 @ 10:30 AM"}
			/>
			</MapView>
		);
	}
}

const styles = StyleSheet.create({
	map: {
		...StyleSheet.absoluteFillObject,
		flex: 1
	},
});

export default Map;
