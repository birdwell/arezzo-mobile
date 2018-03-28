import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem as Item } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native';
import store from 'react-native-simple-store';

class ListItem extends Component {
	inProgress = false;

	onFavoritePress = async () => {
		const { item, favorited, onFavorite } = this.props;

		if (favorited) {
			const favorites = await store.get('favorites');
			const newFavorites = favorites.filter(x => x._id !== item._id);

			store.save('favorites', newFavorites).then(() => onFavorite());
        } else {
			store.push('favorites', item).then(() => onFavorite());
        }
	}

	getImages = (item) => {
		if (!item) { return null; }

		if (item.images && item.images.length > 0) {
			return item.images[0].secure_url;
		} else {
			return null;
		}
	}

	render () {
		const { onPress, item, favorited } = this.props;
		const imageURL = this.getImages(item);
		return (
			<Item
				avatar={imageURL && <Image style={{ width: 50, height: 50 }} source={{ uri: imageURL }} />}
				title={item.title}
				titleStyle={styles.title}
				onPress={onPress}
				rightIcon={
					<MaterialIcons
						name={favorited ? 'favorite' : 'favorite-border'}
						size={30}
						onPress={this.onFavoritePress}
					/>
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 14
	}
});

ListItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	item: PropTypes.shape({
		title: PropTypes.string
	}).isRequired,
	favorited: PropTypes.bool,
	onFavorite: PropTypes.func,
};

export default ListItem;