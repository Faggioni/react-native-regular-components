import React, { Component } from 'react';
import {Text, View} from "react-native";
import { textStyles as styles } from './styles';
class TextItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={this.styles.textWrapper}>
                <Text style={this.styles.itemTextStyle}>{ this.props.label + this.props.content }</Text>
            </View>
        );
    }
}
export default TextItem;