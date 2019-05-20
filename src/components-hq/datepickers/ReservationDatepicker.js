import React, { Component } from "react";
import {
    View,
    Text
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import { reservationDatepickerStyles as styles } from './styles';

class ReservationDatepicker extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.inputWrapper }>
                <View style={ this.styles.labelWrapper }>
                    <Text style={ this.styles.labelStyle }>{ this.props.label }</Text>
                </View>
                <View style={ this.styles.pickerWrapper }>
                    <DatePicker
                        date = { this.props.date  }
                        customStyles={ this.styles.datePickerCustomStyle }
                        mode = { (this.props.mode === null) ? "datetime" : this.props.mode }
                        minDate = { this.props.minDate }
                        format = { this.props.format }
                        confirmBtnText = { this.props.confirmButton }
                        cancelBtnText = { this.props.cancelButton }
                        showIcon = { false }
                        onDateChange = { this.props.onDateChange }
                        placeholder = { this.props.placeholder }
                        style = { { width:undefined } }
                    />
                </View>
            </View>
        );
    }
}
export default ReservationDatepicker;