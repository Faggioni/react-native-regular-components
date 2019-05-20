import React, { Component } from 'react';
import {Text, View} from "react-native";
import { manifestTableHeader as styles } from './styles';

class ManifestAccordionTableHeader extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={this.styles.componentWrapper}>
                <View style={this.styles.tableItemStyle}>
                    <Text style={this.styles.headerElementStyle}>Return Date</Text>
                </View>
                <View style={this.styles.tableItemStyle}>
                    <Text style={this.styles.headerElementStyle}>Res Nr.</Text>
                </View>
                <View style={this.styles.tableItemStyle}>
                    <Text style={this.styles.headerElementStyle}>Contact</Text>
                </View>
                <View style={this.styles.tableItemStyle}>
                    <Text style={this.styles.headerElementStyle}>Status</Text>
                </View>
            </View>
        );
    }
}
export default ManifestAccordionTableHeader;