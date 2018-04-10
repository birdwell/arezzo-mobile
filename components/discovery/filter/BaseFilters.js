import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {CheckBox, Slider} from 'react-native-elements';

class BaseFilter extends Component {

    state={
        wifi: false,
        accessible: false,
        proximity: 5,
        price: 3,
        suggestedAge: 12
    }

    roundToDollarSigns()
    {
        let numberOfSigns = Math.round((this.state.price));

        let stringSigns = "";

        for(var i = 0; i<numberOfSigns; i++)
        {
            stringSigns.concat("$");
        }

        return stringSigns;
    }

    render() {
        return(
            <View>
                <CheckBox title="Wifi" checked={this.state.wifi} onPress={() => this.setState({wifi: !this.state.wifi})}/>

                <CheckBox title="Handicap Accessible" checked={this.state.accessible} onPress={() => this.setState({accessible: !this.state.accessible})}/>

                <Text>Proximity: {Math.round(this.state.proximity)} km</Text>
                <Slider maximumValue={10} minimumValue={1} value={this.state.proximity} onValueChange={(value) => this.setState({proximity: value})}/>

                <Text>Price: {Math.round(this.state.price)}</Text>
                <Slider maximumValue={5} minimumValue={1} value={this.state.price} onValueChange={(value) => this.setState({price: value})}/>

                <Text>Suggested Age: {Math.round(this.state.suggestedAge)}+</Text>
                <Slider maximumValue={18} minimumValue={3} value={this.state.suggestedAge} onValueChange={(value) => this.setState({suggestedAge: value})}/>
            </View>
        );
    }

}
export default BaseFilter;