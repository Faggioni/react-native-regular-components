import React, { Component } from "react";
import { View } from 'react-native';
import {
    Button,
    Text
} from 'native-base';
const commonColor = require('../../theme/variables/commonColor');

class ReservationDetailMenuButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.buttonWrapper } >
                <Button block style={ this.styles.buttonStyle } onPress={ this.props.onPress }>
                    <Text style={ this.styles.textStyle }>{ this.props.title }</Text>
                </Button>
            </View>
        );
    }
}
const styles = {
    buttonWrapper:{
        paddingTop:5,
        paddingBottom: 5
    },
    buttonStyle:{
        backgroundColor: '#fff',
        borderRadius: 5
    },
    textStyle:{
        color: commonColor.caagBlue
    }
};
export default ReservationDetailMenuButton;