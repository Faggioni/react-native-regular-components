import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { floatingMapMessagesStyles as styles } from './styles';

class ReserveVehicleOnMapStopwatch extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.stopwatchWrapperComponent }>
                <TouchableOpacity onPress={ this.props.onPress }>
                    <View style={ this.styles.stopwatchInnerWrapper }>
                        <View>
                            <View style={ this.styles.stopwatchWrapper }>
                                <Text style={ this.styles.textStyles }>
                                    { this.props.content }
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ReserveVehicleOnMapStopwatch;