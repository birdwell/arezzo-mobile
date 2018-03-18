import React from 'react';
import PropTypes from 'prop-types';
import { MapView } from 'expo';

const Marker = ({ item, onPress }) => {
	return (
		<MapView.Marker
			coordinate={{
				latitude: item.latitude,
				longitude: item.longitude,
			}}
			title={item.title || ''}
			//description={item.description || ''}
			onPress={() => onPress(item)}
		/>
	);
};

Marker.propTypes = {
	item: PropTypes.shape({
		latitude: PropTypes.number.isRequired,
		longitude: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string
	}),
	onPress: PropTypes.func.isRequired
};

export default Marker;