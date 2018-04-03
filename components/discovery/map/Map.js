import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import { withNavigation } from 'react-navigation';

import Marker from './Marker';

/*
	1. have state for selected marker
	2. display a small view on the bottom of the map if there is a selected marker
	3. make sure to pass onclick to the map marker cmp and wire it up
*/

class Map extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            })
        ),
        navigation: PropTypes.shape({
            navigate: PropTypes.func.isRequired
        }),
        path: PropTypes.string
    };

    static defaultProps = {
        items: []
    };

    componentWillMount() {
        if (this.props.items) {
            this.setupItems(this.props.items);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items) {
            this.setupItems(nextProps.items);
        }
    }

<<<<<<< HEAD
	onMarkerPress = (item) => {
		this.setState({
			region: {
				latitude: item.latitude,
				longitude: item.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
			selectedMarker: item
		}, () => {
			this.map.animateToRegion({
				...item,
				latitudeDelta: this.state.region.latitudeDelta,
				longitudeDelta: this.state.region.longitudeDelta,
			}, 350);
		});
	}
=======
    setupItems(newItems) {
        const items = newItems.map(x => {
            if (!x.location || !x.location.geo) {
                return x;
            }
            return {
                ...x,
                longitude: x.location.geo[0],
                latitude: x.location.geo[1]
            };
        });
        this.setState({ items });
    }
>>>>>>> 9007bacca3e9ff8c00d91f6621128d4d1eeb20e8

    state = {
        selectedMarker: null,
        region: {
            latitude: 35.208611,
            longitude: -97.445833,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        },
        items: []
    };

    onMarkerPress = item => {
        this.setState(
            {
                region: {
                    latitude: item.latitude,
                    longitude: item.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                },
                selectedMarker: item
            },
            () => {
                this.map.animateToRegion(
                    {
                        ...item,
                        latitudeDelta: this.state.region.latitudeDelta,
                        longitudeDelta: this.state.region.longitudeDelta
                    },
                    350
                );
            }
        );
    };

    render() {
        const { selectedMarker, region, items } = this.state;
        const { navigation: { navigate }, path } = this.props;
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={region}
                    ref={x => (this.map = x)}
                >
                    {items.length > 0 &&
                        items.map(item => {
                            if (item.longitude && item.latitude) {
                                return (
                                    <Marker
                                        key={item._id}
                                        item={item}
                                        onPress={this.onMarkerPress}
                                    />
                                );
                            }
                        })}
                </MapView>
                {selectedMarker && (
                    <TouchableOpacity onPress={() => navigate(path, { item: selectedMarker })}>
                        <View style={styles.infoPane}>
                            <Text>{selectedMarker.title}</Text>
                            <Text>{selectedMarker.description}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject
    },
    infoPane: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20
    }
});

export default withNavigation(Map);
