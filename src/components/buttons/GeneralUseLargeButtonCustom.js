import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import { Text } from "native-base";
import { generalUserLargeButtonCustom as styles } from './styles';

class GeneralUserLargeButtonCustom extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <TouchableOpacity
                onPress={ this.props.onPress }
                style={ [ this.styles.touchableStyles, { backgroundColor: this.props.buttonColor, borderColor: this.props.buttonColor }, this.props.customStyle] }>
                <Text style={ this.styles.buttonTextStyle }>
                    { this.props.buttonText }
                </Text>
            </TouchableOpacity>
        );
    }
}
export default GeneralUserLargeButtonCustom;
