import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class OutdoorsScreen extends React.Component {
  static navigationOptions = {
    title: 'Outdoors',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Outdoors</Text>
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