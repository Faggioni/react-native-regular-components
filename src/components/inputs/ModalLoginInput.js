import React, { Component } from "react";
import { Icon, Input, Item, Label } from 'native-base';
import { modalLoginInputStyles as styles } from './styles';
import StringValidator from '../../modules/helpers/validations/StringValidator';
import { TouchableOpacity } from "react-native";


class ModalLoginInput extends Component{
    constructor(props){
        super(props);
        this.validator = new StringValidator();
        this.styles = styles;
    }
    showLabel(){
        if(this.validator.validateField(this.props.label)){
            return(
                <Label style={{ color: '#000' }}>
                    { this.props.label }
                </Label>
            );
        }
    }
    render(){
        return(
            <Item last={ this.props.last } style={ this.styles.itemWrapperStyle }>
                { this.showLabel() }
                <Input
                    allowFontScaling
                    autoCorrect
                    style={ this.styles.inputStyles }
                    placeholder={ this.props.placeholder }
                    placeholderTextColor={ this.props.placeholderStyle }
                    value={ this.props.value }
                    onChangeText={ this.props.onChangeText }
                    secureTextEntry={ this.props.secureTextEntry }
                    underlineColorAndroid="#cdcd"
                />
            </Item>
        );
    }
}
export default ModalLoginInput;
