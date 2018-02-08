import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text } from 'react-native';
import EventItem from '../../components/list-items/EventItem';
import View from '../../components/discovery/View';
import Discovery from '../../components/discovery/View';

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
      // <ScrollView style={styles.container}>
      //   <EventItem event={TestEvent} onPress={() => this.props.navigation.navigate('EventDetails', { ...TestEvent })} />
      // </ScrollView>
      <View>
        <Discovery />
      </View>
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