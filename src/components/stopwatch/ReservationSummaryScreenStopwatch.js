import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { reservationSummaryScreenStopwatchStyles as styles } from "./styles";
import {HQForwardTimer} from 'react-native-hq-times';

class ReservationSummaryScreenStopwatch extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <View style={ this.styles.titleWrapper }>
                    <Text style={ this.styles.titleStyle }>
                        Trip Time
                    </Text>
                    <View style={ this.styles.timerWrapper }>
                        <HQForwardTimer
                            initialSecondsRemaining={ this.props.initialCountdownTime }
                            interval={ 1000 }
                            allowFontScaling={ true }
                            style={ this.styles.timerStyle }
                            onTick={ this.props.onTick }
                            onTimeElapsed={ this.props.onTimeFinished }
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default ReservationSummaryScreenStopwatch;