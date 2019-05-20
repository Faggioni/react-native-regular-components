import React, { Component } from "react";
import {
    View,
    Input,
    Text
} from 'native-base';
import { textInputModalStyles as styles } from "./styles";
class TextInputModal extends Component{
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
                    ref="input"
                    keyboardType={ (this.props.keyboardType === null) ? "default" : this.props.keyboardType }
                    value={ this.props.value }
                    onChangeText={ this.props.onChangeText }
                    style={ this.styles.textInputStyle }
                    placeholder={ this.props.placeholder } />
            </View>
        );
    }
}
export default TextInputModal;