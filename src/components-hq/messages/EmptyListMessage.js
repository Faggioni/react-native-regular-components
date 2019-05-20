import React, { Component } from "react";
import { View, Text } from 'react-native';
import { emptyListMessageStyles as styles } from './styles';

class EmptyListMessage extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.messageWrapper }>
                <Text style={ this.styles.fontStyle }>{ this.props.message }</Text>
            </View>
        );
    }
}
export default EmptyListMessage;
