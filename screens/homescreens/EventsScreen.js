import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { getEvents } from '../../api';

import Discovery from '../../components/discovery/View';

export default class EventsScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  static navigationOptions = {
    title: 'Events',
  };

  state = { events: [], error: '' }

  componentWillMount() {
    getEvents()
      .then(events => {
        this.setState({ events });
      })
      .catch(() => {
        this.setState({ error: 'Unable to get events.' });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <View style={styles.container} >
        <Discovery items={events} />
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