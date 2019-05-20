import React, { Component } from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import TimerCountdown from 'react-native-timer-countdown';


class PreReserveVehicleStopwatch extends Component{
    constructor(props){
        super(props);
    }
    formatSeconds(seconds){
        //console.log(seconds);
    }
    render(){
        return(
            <View style={ { width: 200, borderRadius:5, backgroundColor:"#fff", position: 'absolute', bottom: '10%',paddingBottom:20, alignSelf: 'center' } }>
                <View style={ { flexDirection: 'column', justifyContent: 'center', verticalAlign: 'center' } }>
                    <View>
                        <View style={{ flex:1, flexDirection: 'row', justifyContent:'center' }}>
                            <Text style={{ fontSize: 20,color: '#00a0e1', lineHeight:28, textAlign: 'center', paddingTop:10 }}>
                                {'You have '}
                            </Text>
                            <TimerCountdown
                                initialSecondsRemaining={ this.props.initialCountdownTime }
                                interval={ 1000 }
                                allowFontScaling={ true }
                                style={{ fontSize: 20,color: '#00a0e1', lineHeight:28, textAlign: 'center', paddingTop:10 }}
                                onTick={ this.props.onTick }
                                onTimeElapsed={ this.props.onTimeFinished }
                            />
                        </View>
                        <Text style={{ fontSize: 20,color: '#00a0e1', lineHeight:28, textAlign: 'center', paddingTop:10 }}>
                            to get to the car
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default PreReserveVehicleStopwatch;