import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Animated,
    Platform,
    StyleSheet,
    View,
} from 'react-native';
import Map from '../discovery/map/Map';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class ScrollableHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0
            ),
            refreshing: false
        };
    }

    render() {
        // Because of content inset the scroll value will be negative on iOS so bring
        // it back to 0.
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0
        );
        
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp'
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp'
        });

		const { imageURL } = this.props;

        return <View style={styles.fill}>
				<Animated.ScrollView 
					style={styles.fill} 
					scrollEventThrottle={1} 
					onScroll={Animated.event(
                        [{
							nativeEvent: {
								contentOffset: { y: this.state.scrollY }
							}
                        }],
                        { useNativeDriver: true }
                    )} 
					contentInset={{ top: HEADER_MAX_HEIGHT }} 
					contentOffset={{ y: -HEADER_MAX_HEIGHT }}
				>
                    <View class={styles.scrollViewContent}>
                        {this.props.renderDetails()}
                    </View>
                </Animated.ScrollView>
                <Animated.View pointerEvents="none" style={[styles.header, { transform: [{ translateY: headerTranslate }] }]}>
                    <Animated.Image style={[styles.backgroundImage, { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] }]} source={{ uri: imageURL }} />
                </Animated.View>
            </View>;
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    content: {
        flex: 1
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover'
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
        flex: 1
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

ScrollableHeader.propTypes = {
    imageURL: PropTypes.string.isRequired,
    renderDetails: PropTypes.func.isRequired
};