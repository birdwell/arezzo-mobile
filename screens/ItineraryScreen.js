import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class ItineraryScreen extends React.Component {
  static navigationOptions = {
    title: 'Itinerary',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Itinerary</Text>
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