import React, { Component } from "react";
import { View, TouchableOpacity } from 'react-native';
import {
    Icon
} from "native-base";
import { homeControlButtonStyles as styles } from "./styles";

class HomeConsoleButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <TouchableOpacity style={ this.styles.homeButtonWrapper } >
                <View style={ this.styles.homeButtonInnerWrapper }>
                    <Icon
                        name={ this.props.name }
                        type={ this.props.type }
                        style={ this.styles.iconStyle }
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
export default HomeConsoleButton;
