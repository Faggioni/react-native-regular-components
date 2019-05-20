import React, { Component } from 'react';
import {
    View,
    Text
} from 'native-base'
import { midTitleSmallStyles as styles } from './styles';

class MidTitleSmall extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.midTitleWrapper }>
                <Text style={ this.styles.titleStyle }>{ this.props.title ? this.props.title : this.props.children }</Text>
            </View>
        );
    }
}
export default MidTitleSmall;