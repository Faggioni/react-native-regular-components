import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import { Text } from "native-base";
import { generalUseLargeButtonStyles as styles } from './styles';

class GeneralUserLargeButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <TouchableOpacity
                onPress={ this.props.onPress }
                style={ this.styles.touchableStyles }>
                <Text style={ this.styles.buttonTextStyle }>
                    { this.props.buttonText }
                </Text>
            </TouchableOpacity>
        );
    }
}
export default GeneralUserLargeButton;
