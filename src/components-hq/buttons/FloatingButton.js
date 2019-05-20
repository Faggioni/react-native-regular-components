import React, { Component } from "react";
import { View, TouchableOpacity } from 'react-native';

class FloatingButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.snapButtonWrapper }>
                <TouchableOpacity
                    onPress={ this.props.onPress }
                    style = {  [ this.styles.capture, { height: this.width / 5, width: this.width / 5, borderRadius: this.width / 2 }] }
                />
            </View>
        );
    }
}
const styles = {

};
export default FloatingButton;