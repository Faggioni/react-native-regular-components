import React, { Component } from 'react';
import { View } from 'react-native'
import { fullScreenFixedStyles as styles } from './styles';

class FullScreenFixed extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentStyle }>
                { this.props.children }
            </View>
        );
    }
}
export default FullScreenFixed;