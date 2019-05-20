import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native'
import { takeAPictureStyles as styles } from './styles';

class TakeAPicture extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }    
    render(){
        return(
            <View style={this.styles.wrapperStyle}>
                <View
                    style={this.styles.buttonStyle}
                />
            </View>
        );
    }
}
export default TakeAPicture;