import React, { Component } from 'react';
import {Text, View} from "react-native";
import { manifestHeaderStyle as styles } from './styles';

class ManifestAccordionHeader extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={this.styles.componentWrapper}>
                <Text style={this.styles.headerTextStyles}>{ this.props.headerText }</Text>
            </View>
        );
    }
}
export default ManifestAccordionHeader;