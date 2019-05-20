import React, { Component } from "react";
import {
    View,
    Text,
    Input
} from 'native-base';
import { Platform } from 'react-native';
import { textInputStyles as styles } from "./styles";

class TextInput extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <View style={ this.styles.labelWrapper }>
                    <Text  style={ this.styles.labelStyle }>{ this.props.label }</Text>
                </View>
                <Input
                    keyboardType={ (this.props.keyboardType === null) ? "default" : this.props.keyboardType }
                    value={ this.props.value }
                    onChangeText={ this.props.onChangeText }
                    style={ this.styles.textInputStyle }
                    placeholder={ this.props.placeholder }
                    placeholderTextColor={ Platform.OS === 'ios' ? '#cecece' : null }
                />
            </View>
        );
    }
}
export default TextInput;