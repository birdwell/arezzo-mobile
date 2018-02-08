import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default class FoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Food',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Food</Text>
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