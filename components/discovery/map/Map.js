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

	render() {
		const { items } = this.props;
		return (
			<MapView
				style={styles.map}
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
