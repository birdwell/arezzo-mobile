import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { getSights } from '../../api';

export default class SightsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sights',
  };

  state = { items: [], error: '' };

  componentWillMount() {
    getSights()
      .then(items => {
        this.setState({ items });
      })
      .catch(() => {
        this.setState({ error: 'Unable to get sights.' });
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Sights</Text>
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