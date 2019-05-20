import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import { authNewAccountTitleStyles as styles } from "./styles";

class AuthNewAccountTitle extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.authNewAccountWrapper }>
                <TouchableOpacity style={ this.styles.touchableStyle } onPress={ this.onPressLinkButton }>
                    <Text style={ this.styles.textStyle }>{ this.props.text }</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default AuthNewAccountTitle;