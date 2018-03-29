import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Map from './map/Map';
import List from './list/List';
import FilterBase from './filter/View';
import {
	FontAwesome,
	Ionicons,
 } from '@expo/vector-icons';

const MAP = 'Map';
const LIST = 'List';
const FILTER = 'Filter';
const ICON_SIZE = 20;

class Discovery extends Component {
	static propTypes = {
		items: PropTypes.array,
		path: PropTypes.string.isRequired
	}

	state = {
		view: LIST,
		previousView: null,
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

	renderFilters(currentView) {
		if(currentView !== FILTER)
		{
			this.setState( {previousView: currentView});
			this.changeView(FILTER);
		}
		else
		{
			this.changeView(this.state.previousView);
		}	
		
	}

	render() {
		const { items, path } = this.props;
		const { view } = this.state;
	
		return (
			<View style={styles.container}>
				<View style={styles.buttonRow}>
					<TouchableOpacity style={styles.iconButton} onPress={() => this.renderFilters(view)}>
						<Ionicons name="ios-options" size={ICON_SIZE} color="black" />
						<Text style={styles.buttonLabel}>Filters</Text>
					</TouchableOpacity>
					{view === LIST && this.renderMap()}
					{view === MAP && this.renderList()}
				</View>
					{view === MAP && <Map items={items} path={path} />}
					{view === LIST && <List items={items} path={path} />}
					{view === FILTER && <FilterBase />}
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
		borderLeftWidth: 1,
		borderColor: 'grey'
	},
	buttonRow: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 35,
		marginTop: 10,
	},
	buttonLabel: {
		paddingLeft: 20,
		fontSize: 16,
	},
	container: {
		flex: 1
	}
});

Discovery.defaultProps = {
	items: []
};

export default Discovery;