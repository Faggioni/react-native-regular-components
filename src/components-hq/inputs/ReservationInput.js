import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { reservationInputStyles as styles } from "./styles";

class ReservationInput extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={this.styles.inputGroupInnerWrapper}>
                <Text style={this.styles.labelStyles}>{ this.props.label }</Text>
                <TextInput
                    style={ this.styles.input }
                    name={ this.props.name }
                    type="text"
                    keyboardType={ (this.props.keyboardType) ? this.props.keyboardType : 'default' }
                    placeholder={ this.props.placeholder }
                    placeholderTextColor={ this.styles.placeholderColor }
                    value={ this.props.value }
                    onChangeText={ this.props.onChangeText }
                    secureTextEntry={ this.props.secureTextEntry }
                    underlineColorAndroid={ this.styles.underlineColor }
                />
            </View>

        );
    }
}
export default ReservationInput;