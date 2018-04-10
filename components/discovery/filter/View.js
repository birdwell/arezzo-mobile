import React, { Component } from 'react';
<<<<<<< HEAD
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class FilterBase extends Component {

    render() {
        return (
        <Text> Made it here fellas </Text>
        );
    }

}

export default FilterBase;
=======
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

class Filter extends Component {
	render() {
		const { toggleFilters } = this.props;

		return (
			<View style={styles.filterContent}>
				<View style={styles.filterMainBar}>
					<Text style={styles.filterTitle}>
						Filters
					</Text>
					<TouchableOpacity style={styles.filterDone} onPress={toggleFilters}>
						<Text
							style={
								styles.filterDoneText
							}
						>
							Done
						</Text>
					</TouchableOpacity>
				</View>
				<Text>I am the modal content!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    filterMainBar: {
        backgroundColor: 'black',
        padding: 10,
        position: 'relative',
        alignItems: 'center'
    },
    filterTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    filterDoneText: {
        color: 'white'
    },
    filterDone: {
        position: 'absolute',
        right: 5,
        top: 15,
        alignItems: 'center'
	},
	filterContent: {
		maxHeight: 500,
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},
});

export default Filter;
>>>>>>> master
