import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {CheckBox, Slider} from 'react-native-elements';

class BaseFilter extends Component {

    roundToDollarSigns(numSigns)
    {
        let numberOfSigns = Math.round((numSigns));

        let stringSigns = "";

        for(var i = 0; i<numberOfSigns; i++)
        {
            stringSigns.concat("$");
        }

        return stringSigns;
    }

    render() {

        const {currentFilters, onChange} = this.props;

        return(
            <View>
                <CheckBox title="Wifi" checked={currentFilters.wifi} onPress={() => onChange({wifi: !currentFilters.wifi})}/>

                <CheckBox title="Handicap Accessible" checked={currentFilters.accessible} onPress={() => onChange({accessible: !currentFilters.accessible})}/>

                <Text>Proximity: {Math.round(currentFilters.proximity)} km</Text>
                <Slider maximumValue={10} minimumValue={0} value={currentFilters.proximity} onValueChange={(value) => onChange({proximity: value})}/>

                <Text>Price: {Math.round(currentFilters.price)}</Text>
                <Slider maximumValue={5} minimumValue={1} value={currentFilters.price} onValueChange={(value) => onChange({price: value})}/>

                <Text>Suggested Age: {Math.round(currentFilters.suggestedAge)}+</Text>
                <Slider maximumValue={18} minimumValue={0} value={currentFilters.suggestedAge} onValueChange={(value) => onChange({suggestedAge: value})}/>
            </View>
        );
    }

}
export default BaseFilter;