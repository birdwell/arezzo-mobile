import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const FoodItem = ({ onPress, item }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.title}>{item.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 16
	}
});

FoodItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		title: PropTypes.string
	}).isRequired
};

/*
EventItem.name = "Test event";
EventItem.lat = 35.210781;
EventItem.lon = -97.441857;
*/

export default FoodItem;