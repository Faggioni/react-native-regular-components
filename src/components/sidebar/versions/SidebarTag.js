import React, { Component } from "react";
import {
    View,
    Text
} from 'react-native';
import styles from '../styles';

class SidebarTag extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.sidebarTagWrapper }>
                <Text style={ this.styles.sidebarTagTextStyle }>
                    { this.props.versionTag }
                </Text>
            </View>
        );
    }
}
export default SidebarTag;