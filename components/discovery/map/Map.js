import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import Marker from './Marker';

/*
	1. have state for selected marker
	2. display a small view on the bottom of the map if there is a selected marker
	3. make sure to pass onclick to the map marker cmp and wire it up
*/

class Map extends Component {
	static propTypes = {
		items: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired
			})
		)
	}

	static defaultProps = {
		items: []
	}

	componentWillMount() {
		if (this.props.items) {
			this.setupItems(this.props.items);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.items) {
			this.setupItems(nextProps.items);
		}
	}

	setupItems (newItems) {
		const items = newItems.map(x => {
			if (!x.location || !x.location.geo) { return x; }
			return { ...x, longitude: x.location.geo[0], latitude: x.location.geo[1] };
		});
		this.setState({ items });
	}

	state = {
		selectedMarker: null,
		region: {
			latitude: 35.208611,
			longitude: -97.445833,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
		items: []
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
		const { selectedMarker, region, items } = this.state;

		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					initialRegion={region}
					ref={x => this.map = x}
					>
				{
					items.length > 0 && (
						items.map(item => {
							if (item.longitude && item.latitude) {
								return (
									<Marker key={item._id} item={item} onPress={this.onMarkerPress} />
								);
							}
						})
					)
				}

				</MapView>
				<View style={styles.infoPane}>
					{ selectedMarker && (
						<Text>{ selectedMarker.title }</Text>
					)}
					{ selectedMarker && (
						<Text>{ selectedMarker.description }</Text>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	infoPane: {
		backgroundColor: 'rgba(255,255,255,0.9)',
		paddingHorizontal: 18,
    	paddingVertical: 12,
    	borderRadius: 20,
	}
});

export default Map;
