import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const EventItem = ({ onPress, event }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text>{ event.title }</Text>
		</TouchableOpacity>
	);
};

EventItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	event: PropTypes.shape({
		title: PropTypes.string
	}).isRequired
};

export default EventItem;