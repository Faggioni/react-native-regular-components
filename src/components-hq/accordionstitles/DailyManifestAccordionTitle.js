import React, { Component } from 'react';
import {Text, View} from "react-native";

class DailyManifestAccordionTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{ flex: 1, height: 30, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
                <Text style={{ color: '#000', fontSize: 26 }} >{this.props.title}</Text>
            </View>
        );
    }
}
export default DailyManifestAccordionTitle;