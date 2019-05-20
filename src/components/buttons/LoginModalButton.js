import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { loginModalButtonStyles as styles } from "./styles";

class LoginModalButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <TouchableOpacity
                style={ this.styles.buttonWrapper }
                onPress={ this.props.onPress }
            >
                <View>
                    <Text style={ this.styles.buttonTextStyle }>{ this.props.textButton }</Text>
                </View>
            </TouchableOpacity>

        );
    }
}
export default LoginModalButton;