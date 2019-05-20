import React, { Component } from "react";
import { View, Text, Dimensions } from 'react-native';
const commonColor = require('../../theme/variables/commonColor');
class NoReservationsMessage extends Component{
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
const styles = {
    messageWrapper: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: '10%',
        height: Dimensions.get('window').height
    },
    fontStyle: {
        color: commonColor.regularText,
        textAlign: 'center'
    }
};
export default NoReservationsMessage;
