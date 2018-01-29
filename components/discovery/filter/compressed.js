import React from 'react';
import { View, Image, Text } from 'react-native';

const Compressed = ({ activeFilters }) => (
	<View>
		<Image source={require('../../../assets/images/filter.png')} />
		<Text>Filters</Text>
		<Text>{activeFilters}</Text>
	</View>
);

export default Compressed;

