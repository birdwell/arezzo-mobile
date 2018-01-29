import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

export default class HomeIcon extends React.Component {
	onPress = () => {
		const { navigation, path } = this.props;
		navigation.navigate(path);
	}

	render() {
		const { icon, label } = this.props;
		return (
			<TouchableOpacity style={styles.homeIcon} onPress={this.onPress}>
				<View style={styles.homeWrap}>
					{ icon && <Image style={styles.icon} source={icon} />}
					<Text>{label}</Text>
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
	}
});
