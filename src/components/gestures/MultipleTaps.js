import React, { Component } from 'react';
import {
    TapGestureHandler,
    LongPressGestureHandler,
    State,
} from 'react-native-gesture-handler';

class MultipleTaps extends Component{
    /**
     * Ref
     * @type {React.RefObject<any>}
     */
    doubleTapRef = React.createRef();
    constructor(props){
        super(props);
    }
    onHandlerStateChange(event){
    }
    onSingleTap(event){
    }
    onMultipleTaps(event){
        if(event.nativeEvent.state === State.ACTIVE){
            this.props.onMultipleTaps();
        }
    }
    render(){
        return(
            <LongPressGestureHandler
                onHandlerStateChange={this.onHandlerStateChange}
                minDurationMs={this.props.minDuration}
            >
                <TapGestureHandler
                    onHandlerStateChange={this.onSingleTap}
                    waitFor={this.doubleTapRef}>
                    <TapGestureHandler
                        ref={this.doubleTapRef}
                        onHandlerStateChange={this.onMultipleTaps.bind(this)}
                        numberOfTaps={this.props.numberOfTaps}
                    >
                        { this.props.children }
                    </TapGestureHandler>
                </TapGestureHandler>
            </LongPressGestureHandler>
        );
    }
}
export default MultipleTaps;