import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Discovery from '../../components/discovery';

export default class FoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Food',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Food</Text>
        <Discovery />
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