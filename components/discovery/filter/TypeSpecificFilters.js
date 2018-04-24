import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {CheckBox, Slider} from 'react-native-elements';

class TypeSpecificFilter extends Component {


    render()
    {
        const {label} = this.props;

        if(label === 'Sights')
        {
            return(
                <View>
                    <Text>In sights</Text>
                </View>
            );

        }
        else if(label === 'Events')
        {
            return(
                <View>
                    <Text>In events</Text>
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