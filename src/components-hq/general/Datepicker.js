import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Text,
    Picker
} from 'native-base';

class Datepicker extends Component{
    constructor(props) {
        super(props);
        this.styles = styles;
    }
    showDates(){
        let days = [...Array(32).keys() ];
    }
    showMonths(){
    
    }
    showYears(){
    
    }
    createNumberBetween(lowEnd, highEnd){
        var list = [];
        for (var i = lowEnd; i <= highEnd; i++) {
            list.push(i);
        }
    }
    render(){
        return(
            <View style={styles.inputGrp}>
                <Text>Label</Text>
                <Picker style={ this.styles.pickerStyle }>
                    { this.showDates() }
                </Picker>
                <Picker style={ this.styles.pickerStyle }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                </Picker>
                <Picker style={ this.styles.pickerStyle }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                </Picker>
            </View>
        );
    }
}
const styles = {
    inputGrp: {
        flex:1,
        flexDirection: "row",
        marginBottom: 10
    },
    pickerStyle:{
        flex:1,
        flexDirection: 'row'
    }
};
export default Datepicker;
