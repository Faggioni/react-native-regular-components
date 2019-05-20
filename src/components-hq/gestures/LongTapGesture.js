import React, { Component } from 'react';
import { TapGestureHandler, LongPressGestureHandler, State } from "react-native-gesture-handler";
import TakeAPicture from "../buttons/camera/TakeAPicture";
import { View, Text } from 'react-native';

class LongTapGesture extends Component{
    longPressRef = React.createRef();
    constructor(props){
        super(props);
    }
    onSingleTap({nativeEvent}){
        if(nativeEvent.state === State.ACTIVE){
            this.props.onSingleTap();
        }
    }
    onLongTap({nativeEvent}){
        if (nativeEvent.state === State.ACTIVE) {
            this.props.onLongTap();
        }
        if(nativeEvent.state === State.END){
            this.props.onLongTapEnd();
        }
    }
    render(){
        return(
            <TapGestureHandler
                onHandlerStateChange={this.onSingleTap.bind(this)}
                waitFor={this.longPressRef}>
                <LongPressGestureHandler
                    ref={this.longPressRef}
                    onHandlerStateChange={this.onLongTap.bind(this)}
                    minDurationMs={1000}
                >
                    <View style={{ backgroundColor: '#fff',padding: 20}}><Text style={{ color: '#000',fontSize: 20 }}>Hello</Text></View>
                </LongPressGestureHandler>
            </TapGestureHandler>
        );
    }
}
export default LongTapGesture;