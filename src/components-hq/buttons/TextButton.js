import React, { Component } from 'react';
import { Text } from 'react-native'
import {
    Button
} from 'native-base';
import { textButtonStyles as styles } from './styles';

class TextButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Button
                transparent
                onPress={ this.props.onPress }
                style={this.styles.componentWrapper}
            >
                <Text style={this.styles.buttonTextStyles}>{ this.props.buttonText }</Text>
            </Button>
        );
    }
}
export default TextButton;