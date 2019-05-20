import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TimerCountdown from 'react-native-timer-countdown';
import { reserveVehicleOnMapStopwatchStyles as styles } from './styles';

class ReserveVehicleOnMapStopwatch extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    formatSeconds(seconds){
        //console.log(seconds);
    }
    render(){
        return(
            <View style={ this.styles.stopwatchWrapperComponent }>
                <TouchableOpacity onPress={ this.props.onPressStopwatch }>
                    <View style={ this.styles.stopwatchInnerWrapper }>
                        <View>
                            <View style={ this.styles.stopwatchWrapper }>
                                <Text style={ this.styles.textStyles }>
                                    {"You have "}
                                </Text>
                                <TimerCountdown
                                    initialSecondsRemaining={ this.props.initialCountdownTime }
                                    interval={ 1000 }
                                    allowFontScaling={ true }
                                    style={ this.styles.timeStyle }
                                    onTick={ this.props.onTick }
                                    onTimeElapsed={ this.props.onTimeFinished }
                                />
                            </View>
                            <Text style={ this.styles.textStyles }>
                                to get to your ZÜN
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ReserveVehicleOnMapStopwatch;