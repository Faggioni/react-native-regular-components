import React, { Component } from 'react';
import {View} from "react-native";
import {Text} from "native-base";
import {noOptionsMessages as styles} from './styles';

class NoOptions extends Component{
    constructor(props) {
        super(props);
        this.styles = styles;
    }

    render(){
        return (
            <View style={this.styles.componentWrapper}>
                <View>
                    <Text style={this.styles.regularText}>{this.props.label}</Text>
                </View>
                <View>
                    <Text style={this.styles.regularText}>{this.props.message}</Text>
                </View>
            </View>
        );
    }
}
export default NoOptions