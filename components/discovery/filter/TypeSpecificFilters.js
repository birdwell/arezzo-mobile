import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {CheckBox, Slider} from 'react-native-elements';

class TypeSpecificFilter extends Component {

    getTimeSlotLabel(value)
    {
        value = Math.round(value);

        if(value === 0)
        {
            return 'Anytime';
        }
        else if(value === 1)
        {
            return 'Morning';
        }
        else if(value === 2)
        {
            return 'Afternoon';
        }
        else if(value === 3)
        {
            return 'Evening';
        }
    }
    

    render()
    {

        const {label, currentFilters, onFilterChange} = this.props;

        if(label === 'Sights')
        {
            //filter by isIndoor
            return(
                <View>
                    <CheckBox title="Indoor" checked={currentFilters.isIndoor} onPress={() => onFilterChange('isIndoor', !currentFilters.isIndoor)}/>
                </View>
            );

        }
        else if(label === 'Events')
        {
            //date
            return(
                <View>
                    <Text>Time: {this.getTimeSlotLabel(currentFilters.timeSlot)}</Text>
                    <Slider maximumValue={3} minimumValue={0} value={Math.round(currentFilters.timeSlot)} onValueChange={(value) => onFilterChange('timeSlot', Math.round(value))}/>   
                </View>
            );

        }
        else if(label === 'Outdoors')
        {
            return(
                <View>
                    <Text>In outdoors</Text>
                </View>
            );

        }
        else if(label === 'Food')
        {
            return(
                <View>
                    <Text>In food</Text>
                </View>
            );

        }
        else if(label === 'Shopping')
        {
            return(
                <View>
                    <Text>In shopping</Text>
                </View>
            );

        }
        else
        {

            return (
                <View>
                    <Text>No specific filters available</Text>
                </View>
            )
        }

    }

}
export default TypeSpecificFilter;