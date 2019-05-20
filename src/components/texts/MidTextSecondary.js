import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { midTextSecondaryStyles as styles } from "./styles";

class MidTextSecondary extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.midTextWrapper }>
                <Text style={ this.styles.titleStyle }>{ this.props.title ? this.props.title : this.props.children }</Text>
            </View>
        );
    }
}
export default MidTextSecondary;