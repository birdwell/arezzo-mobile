import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {
	FontAwesome,
	Ionicons,
} from '@expo/vector-icons';

import Map from './map/Map';
import List from './list/List';
import Filter from './filter/View';

const MAP = 'Map';
const LIST = 'List';
const FILTER = 'Filter';
const ICON_SIZE = 20;

class Discovery extends Component {
	static propTypes = {
		items: PropTypes.array,
		path: PropTypes.string.isRequired,
		loading: PropTypes.bool,
		refreshing: PropTypes.bool,
		onRefresh: PropTypes.func,
		onFilterChange: PropTypes.func,
		currentFilters: PropTypes.object
	}

	state = {
		view: LIST,
		showFilters: false,

	}

	changeView = (view) => {
		this.setState({ view });
	}

	renderMap() {
		return (
			<TouchableOpacity style={styles.iconButton} onPress={() => this.changeView(MAP)}>
				<FontAwesome name="map-o" size={ICON_SIZE} color="black" />
				<Text style={styles.buttonLabel}>{MAP}</Text>
			</TouchableOpacity>
		);
	}

	renderList() {
		return (
			<TouchableOpacity style={styles.iconButton} onPress={() => this.changeView(LIST)}>
				<FontAwesome name="list" size={ICON_SIZE} color="black" />
				<Text style={styles.buttonLabel}>{LIST}</Text>
			</TouchableOpacity>
		);
	}

	toggleFilters = () => {
		const { showFilters } = this.state;
		this.setState({ showFilters: !showFilters });

	}

	render() {
		const { items, path, loading, onRefresh, refreshing, onFilterChange, currentFilters } = this.props;
		const { view, showFilters } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.buttonRow}>
					<TouchableOpacity style={styles.iconButton} onPress={this.toggleFilters}>
						<Ionicons name="ios-options" size={ICON_SIZE} color="black" />
						<Text style={styles.buttonLabel}>Filters</Text>
					</TouchableOpacity>
					{view === LIST && this.renderMap()}
					{view === MAP && this.renderList()}
				</View>
				{view === MAP && <Map items={items} path={path} />}
				{view === LIST && <List items={items} loading={loading} path={path} onRefresh={onRefresh} refreshing={refreshing} />}
				<Modal isVisible={showFilters} style={styles.modal} onBackdropPress={this.toggleFilters}>
					<Filter toggleFilters={this.toggleFilters} currentFilters={currentFilters} onFilterChange={onFilterChange}/>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	iconButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingLeft: 20,
	},
	buttonRow: {
		flexDirection: 'row',
		height: 35,
		marginTop: 10
	},
	buttonLabel: {
		paddingLeft: 20,
		fontSize: 16
	},
	container: {
		flex: 1
	},
	modal: {
		justifyContent: 'flex-end',
		margin: 0,
	},
});

Discovery.defaultProps = {
	items: []
};

export default Discovery;