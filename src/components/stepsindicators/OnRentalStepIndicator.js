import React, { Component } from 'react';
import {
    View
} from 'native-base';
import { HQStepIndicator } from 'react-native-hq-components';
import { onRentalStepsIndicatorStyles as stylesComponent } from './styles';
import { onRentalStepsContentStyles as styles } from './styles';

const labels = [
    "Leave vehicle in designated area.",
    "Stop engine.",
    "Attach key to keyholder in glovebox.",
    "Exit vehicle and close all doors.",
    "Click Done button below.",
];
const content = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

class OnRentalStepIndicator extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
        this.state = {
            currentPosition: 2
        }
    }

    onPressStep( newPosition ) {
        if ( newPosition <=2 ) {
            this.setState( { currentPosition: 2 } );

        } else {
            this.setState( { currentPosition: newPosition } );
        }

    }

    render() {
        return (
            <View style={this.styles.componentWrapper}>
                <HQStepIndicator
                    direction="vertical"
                    customStyles={stylesComponent}
                    currentPosition={this.state.currentPosition}
                    stepCount={5}
                    labels={labels}
                    numberofStepsCompletedByDefault={2}
                    onPress={this.onPressStep.bind( this )}
                />
            </View>

        );
    }
}

export default OnRentalStepIndicator;