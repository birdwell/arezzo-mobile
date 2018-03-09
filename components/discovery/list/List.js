import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
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
		path: PropTypes.string.isRequired
	}

	async componentDidMount() {
		await Font.loadAsync({
			...MaterialIcons.font
		});
	}

	renderEmpty() {
		return(
			<View style={styles.emptyContainer}>
				<Text h5 style={styles.emptyText}>Empty</Text>
			</View>
		);
	}


	render() {
		const { items, path, navigation: { navigate } } = this.props;

		if (items.length === 0) {
			return this.renderEmpty();
		}

		return (
			<NativeList containerStyle={{ marginTop: 0 }}>
				{items.map(item => (
					<ListItem 
						item={item}
						key={item._id}
						onPress={() => navigate(path, { item })} 
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
