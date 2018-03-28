import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import store from 'react-native-simple-store';
import { Font } from 'expo';
import { withNavigation } from 'react-navigation';
import { List as NativeList, Text } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import ListItem from './ListItem';

class List extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired,
		}),
		path: PropTypes.string,
		favoriteAll: PropTypes.bool
	}

	static defaultProps = {
		favoriteAll: false,
		items: []
	}

	state = {
		favorited: []
	}

	async componentDidMount() {
		this.getFavorites();
		await Font.loadAsync({
			...MaterialIcons.font
		});
	}

	getFavorites = async () => {
		const favorited = await store.get('favorites');
		this.setState({ favorited: favorited || [] });
	}

	renderEmpty() {
		return (
			<View style={styles.emptyContainer}>
				<Text h5 style={styles.emptyText}>Empty</Text>
			</View>
		);
	}

	renderError() {
		return (
			<View style={styles.emptyContainer}>
				<Text h5 style={styles.emptyText}>Unable to load items.</Text>
			</View>
		);
	}

	render() {
		const { items, path, navigation: { navigate }, favoriteAll } = this.props;
		const { favorited } = this.state;

		if (!items || (Array.isArray(items) && items.length) === 0) {
			return this.renderEmpty();
		}

		if (items && items.message) {
			return this.renderError();
		}

		return (
			<NativeList containerStyle={{ marginTop: 0 }}>
				{items && items.map(item => (
					<ListItem
						item={item}
						key={item._id}
						onPress={() => navigate(path, { item })}
						favorited={favoriteAll || !!favorited.find((x) => x._id === item._id)}
						onFavorite={this.getFavorites}
					/>
				))}
			</NativeList>
		);
	}
}

const styles = StyleSheet.create({
	emptyText: {
		textAlign: 'center'
	}
});

export default withNavigation(List);
