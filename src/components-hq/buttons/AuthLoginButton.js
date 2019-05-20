import React, { Component } from 'react';
import {
    Button,
    Text
} from "native-base";
import { authLoginButton as styles } from "./styles";

class AuthLoginButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Button
                light
                rounded
                block
                style={ this.styles.submitButtonStyle }
                onPress={ this.props.onPress }
            >
                <Text style={ this.styles.textStyle }>{ this.props.buttonText }</Text>
            </Button>
        );
    }
}
export default AuthLoginButton;