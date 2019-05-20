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
        this.state = {
            secureEntry: true
        }
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
    onPressShowPasswordButton(){
        this.setState({ secureEntry: ! this.state.secureEntry });
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
                    secureTextEntry={ this.state.secureEntry }
                    underlineColorAndroid="#cdcd"

                />
                <TouchableOpacity onPress={ this.onPressShowPasswordButton.bind(this) } style={this.styles.showPasswordButtonStyle}>
                    <Icon name="remove-red-eye" type="MaterialIcons" style={{ color:"#00a0e1" }}/>
                </TouchableOpacity>
            </Item>
        );
    }
}
export default ModalLoginInput;
