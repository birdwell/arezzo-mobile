import { StyleSheet } from 'react-native';

export const colors = {
	black: '#1a1917',
	gray: '#888888',
	background1: '#B721FF',
	background2: '#21D4FD'
};

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	homeGrid: {
		flex: 2,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}, 
	carouselContainer: {
		backgroundColor: 'white'
	},
	slider: {
		marginTop: 5,
		overflow: 'visible' // for custom animations
	},
	sliderContentContainer: {
		paddingVertical: 10 // for custom animation
	},
});