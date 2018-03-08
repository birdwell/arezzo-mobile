import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { MapView } from 'expo';
import Marker from './Marker';

/*
	1. have state for selected marker
	2. display a small view on the bottom of the map if there is a selected marker
	3. make sure to pass onclick to the map marker cmp and wire it up
*/

class Map extends Component {
	static propTypes = {
		items: PropTypes.arrayOf({
			item: PropTypes.shape({
				latitude: PropTypes.number.isRequired,
				longitude: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired
			})
		})  
	}

	state = {
		selectedMarker: null
	}

	onMarkerPress = (item) => {
		this.setState({ 
			region: {
				latitude: item.latitude,
				longitude: item.longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
			selectedMarker: item
		}, () => {
			this.map.animateToRegion({
				...item,
				latitudeDelta: this.state.region.latitudeDelta,
				longitudeDelta: this.state.region.longitudeDelta,
			}, 350);
		});
	}

	render() {
		const { items } = this.props;
		const { selectedMarker } = this.state;

		return (
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 35.208611,
					longitude: -97.445833,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				ref={x => this.map = x}
				>
			{
				items.length > 0 && (
					items.map(item => <Marker key={item._id} item={item} 
						onPress = {this.onMarkerPress} />)
				)
			}
			{ selectedMarker && (
				<Text>{ selectedMarker.title }</Text>
			)}
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
