import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text } from 'react-native';
import EventItem from '../../components/list-items/EventItem';

const TestEvent = { title: 'Test Event' };

export default class EventsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: 'Events',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Events</Text>
        <EventItem event={TestEvent} onPress={() => this.props.navigation.navigate('EventDetails', { ...TestEvent })} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});