import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const DetailTile = ({ text, label }) => {
    return (
        <View style={styles.tile}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

DetailTile.propTypes = {
	text: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontWeight: '800'
	},
	label: {
		fontSize: 12
	},
	tile: {
		marginRight: 10
	}
});

export default DetailTile;