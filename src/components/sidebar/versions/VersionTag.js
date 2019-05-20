import React, { Component } from "react";
import {
    View,
    Text
} from 'react-native';
import { versionTagStyles as styles } from '../styles';

class VersionTag extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.sidebarTagWrapper }>
                <Text style={ this.styles.sidebarTagTextStyle }>
                    { this.props.version }
                </Text>
            </View>
        );
    }
}
export default VersionTag;