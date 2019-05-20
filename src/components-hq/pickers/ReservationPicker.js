import React, { Component } from "react";
import {
    View,
    Text,
    Picker
} from 'native-base';

/*
 * Styles
 */
import { reservationPickerStyles as styles } from './styles';

class ReservationPicker extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    displayPickerOptions(){
        return this.props.options.map( (item) => {
            return (
                <Picker.Item key={ item.id } label={ item.label } value={ item.id } />
            );
        });
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
                        placeholder={ this.props.placeholder }
                        itemTextStyle = { this.styles.itemTextStyle  }
                        onValueChange = { this.props.onValueChange }
                        selectedValue={ this.props.selectedValue }
                        placeholderIconColor={ this.styles.placeholderIconColor }
                        dropdown
                        enabled
                        style={ this.styles.pickerStyle }
                    >
                        <Picker.Item key="0" label={this.props.placeholder} value="" />
                        { this.displayPickerOptions() }
                    </Picker>
                </View>
            </View>
        );
    }
}
export default ReservationPicker;
