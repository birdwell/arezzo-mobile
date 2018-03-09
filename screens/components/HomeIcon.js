import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default class HomeIcon extends React.Component {
	static propTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired
		}),
		path: PropTypes.string,
		icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		label: PropTypes.string,
		iconElement: PropTypes.element,
		detailPath: PropTypes.string,
		getItems: PropTypes.func,
	}

	onPress = () => {
		const { navigation, detailPath, getItems, label } = this.props;

		navigation.navigate('Place', { path: detailPath, getItems, title: label });
	}

	render() {
		const { label, iconElement } = this.props;

		return (
			<TouchableOpacity style={styles.homeIcon} onPress={this.onPress}>
				<View style={styles.homeWrap}>
					{iconElement}
					<Text style={styles.label}>{label}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	homeIcon: {
		padding: 10,
		width: 125,
		height: 125,
		justifyContent: 'center',
        alignItems: 'center',
	},
	homeWrap: {
		justifyContent: 'center',
		alignItems: 'center',	
	},
	icon: {
		width: 75,
		height: 75
	},
	label: {
		fontSize: 16
	}
});
