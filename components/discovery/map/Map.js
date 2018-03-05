import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
import Marker from './Marker';

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
		region: {
			// OU campus
			latitude: 35.208611,
			longitude: -97.445833,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		}
	}

	onRegionChange = (region) => {
		this.setState({ region });
	}

	render() {
		const { items } = this.props;
		debugger;
		return (
			<MapView
				style={styles.map}
				region={this.state.region}
				onRegionChange={this.onRegionChange}
				initialRegion={{
					latitude: 35.208611,
					longitude: -97.445833,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
			{
				items.length > 0 && (
					items.map(item => <Marker key={item.title} item={item} />)
				)
			}
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
