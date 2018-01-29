import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Discovery from '../../components/discovery/View';


export default class FoodScreen extends React.Component {
  static navigationOptions = {
    title: 'Food',
  };

  render() {
    return (
      <View style={styles.container}>
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