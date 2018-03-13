import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet } from 'react-native';
import { ListItem as NativeListItem } from 'react-native-elements';


const ListItem = ({ onPress, item }) => {
	const imageURL = item.images && item.images.length > 0 ? item.images[0].secure_url : null;
	return (
		<NativeListItem
			avatar={imageURL && <Image style={{ width: 50, height: 50 }} source={{ uri: imageURL }} />}
			title={item.title}
			titleStyle={styles.title}
			onPress={onPress}
			hideChevron
		/>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 14
	}
});

ListItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		title: PropTypes.string
	}).isRequired
};

export default ListItem;
