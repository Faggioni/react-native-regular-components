import React, { Component } from 'react';
import {Linking, Text, View, TouchableOpacity} from "react-native";
import { textDynamicStyles as styles } from './styles';
class PhoneItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    onPressPhoneNumber(){
        Linking.openURL('tel:' + this.props.content);
    }
    render(){
        return(
            <View style={this.styles.textWrapper}>
                <TouchableOpacity onPress={this.onPressPhoneNumber.bind(this)}><Text style={this.styles.itemTextStyle}>{this.props.content}</Text></TouchableOpacity>
            </View>
        );
    }
}
export default PhoneItem;