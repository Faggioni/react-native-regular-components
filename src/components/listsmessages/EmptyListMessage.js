import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { emptyListMessage as styles } from './styles';

class EmptyListMessage extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <Text style={ this.styles.messageTextStyle }>{ this.props.message }</Text>
            </View>
        );
    }
}
export default EmptyListMessage;