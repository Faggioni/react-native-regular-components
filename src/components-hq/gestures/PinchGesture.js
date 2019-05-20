import React, {Component} from 'react';
import {PinchGestureHandler} from "react-native-gesture-handler";

class PinchGesture extends Component{
    constructor(props){
        super(props);
    }
    onPinchGestureEvent(event){
        this.props.onPinchScreen(event);
    }
    render(){
        return(
            <PinchGestureHandler
                onGestureEvent={this.onPinchGestureEvent.bind(this)}>
                {this.props.children}
            </PinchGestureHandler>
            );
    }
}
export default PinchGesture;