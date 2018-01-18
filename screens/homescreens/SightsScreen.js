import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SightsScreen extends React.Component {
  static navigationOptions = {
    title: 'Sights',
  };

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