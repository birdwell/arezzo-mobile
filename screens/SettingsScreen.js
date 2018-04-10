import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Switch from 'react-native-switch-pro'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {

    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => 
            <View style={styles.container}>
              <Text>{item.key}</Text>
              <Switch onSyncPress={value => (true)}/>
            </View>
          }
        />
      </List>
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