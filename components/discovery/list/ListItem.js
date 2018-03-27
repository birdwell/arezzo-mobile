import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem as Item } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, StyleSheet, AsyncStorage } from 'react-native';

class ListItem extends Component {
	inProgress = false;

	saveFavorite = async () => {
		const { item, favorited } = this.props;
		
		if (this.inProgress) return;

		if (!favorited) {
			try {
				const rawFavorites = await AsyncStorage.getItem('@Favorites');
				const favorites = JSON.parse(rawFavorites);
				this.inProgress = true;

				if (favorites && !!favorites.filter(x => x._id == item._id)) {
					const newFavorites = [...favorites, item];
					await AsyncStorage.setItem(`@Favorites`, JSON.stringify(newFavorites), () => { this.inProgress = false; });
				} else if (!!favorites.filter(x => x._id == item._id) && !favorites) {
					await AsyncStorage.setItem(`@Favorites`, JSON.stringify([item]), () => { this.inProgress = false; });
				}
			} catch (error) {
				// Error saving datad
				console.error(error); // eslint-disable-line
			}
		} else {
			try {
				const favorites = await AsyncStorage.getItem('@Favorites');
				this.inProgress = true;

				if (favorites) {
					const newFavorites = JSON.parse(favorites).filter(x => x._id != item._id);
					await AsyncStorage.setItem(`@Favorites`, JSON.stringify(newFavorites), () => { this.inProgress = false; });
				}
			} catch (error) {
				console.error(error); // eslint-disable-line
			}
		}
	}

	render () {
		const { onPress, item, favorited } = this.props;
		const imageURL = item.images.length > 0 ? item.images[0].secure_url : null;
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
						onPress={this.saveFavorite}
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
	favorited: PropTypes.bool
};

export default ListItem;