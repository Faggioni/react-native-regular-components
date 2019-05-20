import React, { Component } from "react";
import { TextInput } from 'react-native';
import { generalUseInputStyles as styles } from './styles';


class GeneralUseInput extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <TextInput
                allowFontScaling
                autoCorrect
                clearTextOnFocus
                keyboardAppearance="light"
                style={ this.styles.inputStyles }
                underlineColorAndroid='transparent'
                placeholder={ this.props.placeholder }
                placeholderTextColor={ this.props.placeholderStyle }
                value={ this.props.searchInputValue }
                onChangeText={ this.props.onChangeText }
            />
        );
    }
}
export default GeneralUseInput;
