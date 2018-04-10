import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import openMap from 'react-native-open-maps';
import { FontAwesome } from '@expo/vector-icons';
import { WebBrowser } from 'expo';
import DetailTile from './DetailTile';
import { getProps, getImage } from '../../utils';
import ScrollableHeader from '../../components/common/ScrollableHeader';

class EventDetails extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            state: PropTypes.shape({
                params: PropTypes.shape({
                    title: PropTypes.string,
                    description: PropTypes.string
                })
            })
        })
    };

    renderDetails = () => {
        const { item } = getProps(this.props);
        const { title, description, startDate, endDate } = item;
        const start = moment(startDate);
        const end = moment(endDate).format('h:mmA');
        const longitude = item.location.geo[0];
        const latitude = item.location.geo[1];
        const { location: { street1, suburb, state } } = item;

        return (
            <View style={styles.container}>
                {item.website && (
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                        <FontAwesome
                            style={styles.website}
                            name={'external-link'}
                            size={20}
                            onPress={() => {WebBrowser.openBrowserAsync(item.website);}}
                        />
                    </View>
                )}
                <View styles={styles.eventDetails}>
                    <Text style={styles.detailHeader}>
                        Event Details
                    </Text>
                    <View style={styles.detailTiles}>
                        <DetailTile text={start.format('MMM D')} label="Event Date" />
                        <DetailTile text={`${start.format('h:mmA')}-${end}`} label="Schedule" />
                    </View>
                </View>
                <Text style={styles.detailHeader}>Location</Text>
                <TouchableOpacity onPress={() => openMap({ longitude, latitude })}>
                    <Text selectable>
                        {`${street1}, ${suburb} ${state}`}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.detailHeader}>Description</Text>
                <Text style={styles.baseText}>{description}</Text>
            </View>
        );
    }

    render() {
        const { item } = getProps(this.props);
        const imageURL = getImage(item);
        return imageURL ? <ScrollableHeader imageURL={imageURL} renderDetails={this.renderDetails} /> : this.renderDetails();
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    canvas: {},
    baseText: {
        fontSize: 14,
        fontWeight: '300'
    },
    detailHeader: {
        fontSize: 14,
        color: '#606060',
        paddingTop: 10,
        paddingBottom: 10
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    detailTiles: {
        flex: 1,
        flexDirection: 'row'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default EventDetails;
