import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class ShoppingScreen extends React.Component {
  static navigationOptions = {
    title: 'Shopping',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Shopping</Text>
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