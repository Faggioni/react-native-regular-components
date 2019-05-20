import React, { Component } from "react";
import { View, TouchableOpacity } from 'react-native';
import {
    Icon
} from "native-base";

class BackButtonCamera extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.transparentBackButtonWrapper }>
                <TouchableOpacity
                    style={ this.styles.transparentBackButtonStyle }
                    onPress={ this.props.onPress }
                >
                    <Icon
                        active
                        color="#fff"
                        type='Ionicons'
                        name='ios-arrow-back'
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = {
    transparentBackButtonWrapper:{
        position: 'absolute',
        left: '5%',
        top: '5%',
        minHeight: '10%',
        zIndex: 1
    },
};
export default BackButtonCamera;