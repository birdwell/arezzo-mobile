import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {CheckBox, Slider} from 'react-native-elements';
import TypeSpecificFilter from './TypeSpecificFilters';

class BaseFilter extends Component {

    roundToDollarSigns(numSigns)
    {
        let numberOfSigns = Math.round((numSigns));

        if(numberOfSigns === 0)
        {
            return '';
        }
        else if(numberOfSigns === 1)
        {
            return '$';
        }
        else if(numberOfSigns === 2)
        {
            return '$$';
        }
        else if(numberOfSigns === 3)
        {
            return '$$$';
        }
        else if(numberOfSigns === 4)
        {
            return '$$$$';
        }
        else if(numberOfSigns === 5)
        {
            return '$$$$$';
        }
    }

    render() {

        const {currentFilters, onFilterChange, label} = this.props;

        return(
            <View>
                <CheckBox title="Wifi" checked={currentFilters.wifi} onPress={() => onFilterChange('wifi', !currentFilters.wifi)}/>

                <CheckBox title="Handicap Accessible" checked={currentFilters.accessibility} onPress={() => onFilterChange('accessibility', !currentFilters.accessibility)}/>

                <Text>Proximity: {Math.round(currentFilters.location)} km</Text>
                <Slider maximumValue={10} minimumValue={0} value={currentFilters.location} onValueChange={(value) => onFilterChange('location', value)}/>

                <Text>Price: {this.roundToDollarSigns(currentFilters.price)}</Text>
                <Slider maximumValue={5} minimumValue={0} value={Math.round(currentFilters.price)} onValueChange={(value) => onFilterChange('price', Math.round(value))}/>

                <TypeSpecificFilter label={label} currentFilters={currentFilters} onFilterChange={onFilterChange}/>
            </View>
        );
    }

}
export default BaseFilter;