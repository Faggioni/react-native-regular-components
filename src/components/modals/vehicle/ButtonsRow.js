import React, { Component } from "react";
import { View } from 'react-native';
import StartButton from './StartButton';
import ReserveButton from './ReserveButton';
import ModalActionButton from '../../buttons/ModalActionButton';
import { buttonsRowStyles as styles } from "./styles";

class ButtonsRow extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }

    onPressReserve() {
        this.props.onPressReserveButton( this.props.vehicle );
    }

    onPressStart() {
        this.props.onPressStartButton();
    }

    render() {
        return (
            <View style={this.styles.buttonRowWrapper}>
                <ReserveButton
                    onPressReserveButton={this.onPressReserve.bind( this )}
                    reserveInProgress={ this.props.reserveInProgress }
                />
                <StartButton
                    onPressStartButton={this.onPressStart.bind( this )}
                    reserveInProgress={ this.props.reserveInProgress }
                />
            </View>
        );
    }
}

export default ButtonsRow;
