import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {
    Text
} from 'native-base';
import { autocompleteItemStyles as styles } from './styles';

class AutocompleteItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <TouchableOpacity style={ this.styles.buttonStyle } onPress={ this.props.onPress }>
                <Text style={ this.styles.labelStyle }>{ this.props.label }</Text>
            </TouchableOpacity>
        );
    }
}
export default AutocompleteItem;
