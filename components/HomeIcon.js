import React from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet } from 'react-native';

export default class HomeIcon extends React.Component {
	onPress = () => {
		const { navigation, path } = this.props;
		navigation.navigate(path);
	}

	render() {
		const { icon, label } = this.props;
		return (
			<TouchableHighlight style={styles.homeIcon} onPress={this.onPress}>
				<View>
					{/* <Image source={icon} /> */}
					<Text>{label}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	homeIcon: {
		padding: 10,
		width: 150,
		height: 150,
		justifyContent: 'center',
        alignItems: 'center',
	},
});
