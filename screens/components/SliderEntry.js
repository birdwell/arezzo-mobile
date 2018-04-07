import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SliderEntry.style';
import { withNavigation } from 'react-navigation';
import { getImage } from '../../utils';

class SliderEntry extends Component {

	static propTypes = {
		item: PropTypes.object.isRequired,
		even: PropTypes.bool,
		parallax: PropTypes.bool,
		parallaxProps: PropTypes.object,
		navigation: PropTypes.shape({
			navigate: PropTypes.func.isRequired,
		}),
		path: PropTypes.string,
	};

	get image() {
		const { item, parallax, parallaxProps, even } = this.props;
		const url = getImage(item);
		return parallax ? (
			<ParallaxImage
				source={{ uri: url }}
				containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
				style={styles.image}
				parallaxFactor={0.35}
				showSpinner={true}
				spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
				{...parallaxProps}
			/>
		) : (
				<Image
					source={{ uri: url }}
					style={styles.image}
				/>
			);
	}

	render() {
		const { item, even, navigation: { navigate }, path } = this.props;
		const { title } = item;
		const uppercaseTitle = title ? (
			<Text
				style={[styles.title, even ? styles.titleEven : {}]}
				numberOfLines={2}
			>
				{title.toUpperCase()}
			</Text>
		) : false;

		return (
			<TouchableOpacity
				activeOpacity={1}
				style={styles.slideInnerContainer}
				onPress={() => navigate((path || `${item.__t}Details`), { item })}
			>
				<View style={styles.shadow} />
				<View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
					{this.image}
					<View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
				</View>
				<View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
					{uppercaseTitle}
				</View>
			</TouchableOpacity>
		);
	}
}

export default withNavigation(SliderEntry);