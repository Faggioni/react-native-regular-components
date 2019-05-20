
import React, { Component } from "react";
import {
    View,
    Text,
    Picker
} from 'native-base';
import { reservationFuelPickerStyles as styles } from './styles';

class ReservationFuelPicker extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View>
                <View style={ this.styles.labelWrapper }>
                    <Text style={ this.styles.labelStyle }>{ this.props.label }</Text>
                </View>
                <View style={ this.styles.pickerWrapper }>
                    <Picker
                        note
                        onValueChange = { this.props.onValueChange }
                        placeholder = { this.props.placeholder }
                        selectedValue = { this.props.selectedValue }
                        itemTextStyle = { { color: "#000" } }
                        enabled
                        style={ this.styles.pickerStyle }
                    >
                        <Picker.Item key="-1" label="Fuel Level" value="" />
                        <Picker.Item key="0" label="0/8" value="0" />
                        <Picker.Item key="1" label="1/8" value="1" />
                        <Picker.Item key="2" label="2/8" value="2" />
                        <Picker.Item key="3" label="3/8" value="3" />
                        <Picker.Item key="4" label="4/8" value="4" />
                        <Picker.Item key="5" label="5/8" value="5" />
                        <Picker.Item key="6" label="6/8" value="6" />
                        <Picker.Item key="7" label="7/8" value="7" />
                        <Picker.Item key="8" label="8/8" value="8" />
                    </Picker>
                </View>
            </View>
        );
    }
}
export default ReservationFuelPicker;
