import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SliderEntry.style';
import { getImage } from '../../utils';

export default class SliderEntry extends Component {

	static propTypes = {
		data: PropTypes.object.isRequired,
		even: PropTypes.bool,
		parallax: PropTypes.bool,
		parallaxProps: PropTypes.object
	};

	get image() {
		const { data, parallax, parallaxProps, even } = this.props;
		const url = getImage(data);
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
		const { data: { title }, even } = this.props;

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
				onPress={() => { alert(`You've clicked '${title}'`); }}
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