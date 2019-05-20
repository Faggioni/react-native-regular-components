import React, { Component } from 'react';
import {
    Icon,
    Input,
    Item
} from "native-base";
import { authInputStyles as styles } from "./styles";

class AuthInput extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Item style={ this.styles.inputGrp }>
                <Icon
                    active
                    name={ this.props.iconName }
                    style={ this.styles.iconStyles }
                />
                <Input
                    style={ this.styles.input }
                    name={ this.props.name }
                    type="text"
                    placeholder={ this.props.placeholder }
                    placeholderTextColor={ this.styles.placeholderColor }
                    value={ this.props.value }
                    onChangeText={ this.props.onChangeText }
                    secureTextEntry={ this.props.secureTextEntry }
                    underlineColorAndroid={ this.styles.underlineColor }
                />
            </Item>
        );
    }
}
export default AuthInput;