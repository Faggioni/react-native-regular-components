import React, { Component } from "react";
import {
    View,
    Text
} from 'native-base';
import TimerCountdown from 'react-native-timer-countdown';
import { preserveVehicleScreenStopwatchStyles as styles } from './styles';


class PreReserveVehicleScreenStopwatch extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    formatSeconds(seconds){
        //console.log(seconds);
    }
    render(){
        return(
            <View style={ this.styles.stopwatchWrapper }>
                <View style={ this.styles.stopwatchContentWrapper }>
                    <Text style={ this.styles.textStyle }>You have</Text>
                    <TimerCountdown
                        initialSecondsRemaining={ this.props.initialCountdownTime }
                        interval={ 1000 }
                        allowFontScaling={ true }
                        style={ this.styles.countdownStyle }
                        onTick={ this.props.onTick }
                        onTimeElapsed={ this.props.onTimeFinished }
                    />
                </View>
                <Text style={ this.styles.textStyle }>to get to your ZÜN</Text>
            </View>
        );
    }
}
export default PreReserveVehicleScreenStopwatch;