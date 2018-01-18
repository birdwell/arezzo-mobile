import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class MoreScreen extends React.Component {
  static navigationOptions = {
	title: 'More',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>More</Text>
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