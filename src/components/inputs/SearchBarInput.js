import React, { Component } from "react";
import { TextInput, ScrollView } from 'react-native';
import { searchBarInputStyles as styles } from './styles';

class SearchBarInput extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    onBlur(){
        this.props.onBlur();
    }
    render(){
        return(
            <TextInput
                ref={ref => {
                    this.textInput = ref;
                }}
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
                blurOnSubmit
                disableFullscreenUI
                onBlur={ this.onBlur.bind(this) }
            />
        );
    }
}
export default SearchBarInput;
