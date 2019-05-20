import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { midTextStyles as styles } from "./styles";

class MidText extends Component{
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
export default MidText;