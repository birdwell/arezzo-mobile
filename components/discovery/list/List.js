import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import store from 'react-native-simple-store';
import { Font } from 'expo';
import { withNavigation } from 'react-navigation';
import { List as NativeList, Text } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import ListItem from './ListItem';

class List extends Component {
	static propTypes = {
		items: PropTypes.array,
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired,
		}),
		path: PropTypes.string,
		favoriteAll: PropTypes.bool,
		loading: PropTypes.bool,
		onRefresh: PropTypes.func,
		refreshing: PropTypes.bool,
		fetchItems: PropTypes.func
	}

	static defaultProps = {
		favoriteAll: false,
		items: [],
		refreshing: false,
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
		const { fetchItems } = this.props;
		const favorited = await store.get('favorites');

		if (fetchItems) {
			fetchItems();
		}

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

	renderLoading () {
		return (
			<View style={styles.loadingContiner}>
				<ActivityIndicator size="large" color="#000000" />
			</View>
		);
	}

	render() {
		const { items, path, navigation: { navigate }, favoriteAll, loading, refreshing, onRefresh } = this.props;
		const { favorited } = this.state;

		if (loading) {
			return this.renderLoading();
		}

		if (!items || (Array.isArray(items) && items.length) === 0) {
			return this.renderEmpty();
		}

		if (items && items.message) {
			return this.renderError();
		}

		return (
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<NativeList containerStyle={{ marginTop: 0 }}>
					{items && items.map(item => (
						<ListItem
							item={item}
							key={item._id}
							onPress={() => navigate((path || `${item.__t}Details`), { item })}
							favorited={favoriteAll || !!favorited.find((x) => x._id === item._id)}
							onFavorite={this.getFavorites}
						/>
					))}
				</NativeList>
			</ScrollView>

		);
	}
}

const styles = StyleSheet.create({
	emptyText: {
		textAlign: 'center'
	},
});

export default withNavigation(List);
