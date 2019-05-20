import React, { Component } from 'react';
import {Linking, Text, View, TouchableOpacity} from "react-native";
import { textDynamicStyles as styles } from './styles';
class EmailItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    onPressEmail(){
        Linking.openURL('mailto:' + this.props.content);
    }
    render(){
        return(
            <View style={this.styles.textWrapper}>
                <TouchableOpacity onPress={this.onPressEmail.bind(this)}><Text style={this.styles.itemTextStyle}>{this.props.content}</Text></TouchableOpacity>
            </View>
        );
    }
}
export default EmailItem;