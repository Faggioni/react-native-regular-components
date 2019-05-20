import React, { Component } from "react";
import { Modal } from 'react-native';

import {
    View,
} from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures';
import ImageRow from './ImageRow';
import { vehicleModalStyles as styles } from './styles';
import DescriptionRow from "./DescriptionRow";
import ButtonsRow from './ButtonsRow';
import AddressRow from "./AddressRow";
import RateRow from './RateRow';
import VehicleStringFormmater from '../../../modules/helpers/formatting/VehicleStringFormmater';

class VehicleModal extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
        this.configSwipeTracker = {
            velocityThreshold: 0.5,
            directionalOffsetThreshold: 80
        };
        this.formats = new VehicleStringFormmater();
    }

    onSwipeDown() {
        this.props.onRequestClose();
    }

    render() {
        return (
            <GestureRecognizer
                onSwipeDown={this.onSwipeDown.bind( this )}
                config={this.configSwipeTracker}
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{ flex: 1, flexDirection: 'column' }}
                    visible={this.props.visible}
                    onSwipe={this.props.onRequestClose}
                    onRequestClose={this.props.onRequestClose}
                >
                    <View style={this.styles.vehicleModalWrapper}>
                        <ImageRow imageSrc={ this.props.vehicleImage }/>
                        <DescriptionRow
                            vehiclePlate={this.props.vehiclePlate}
                            vehicleLabel={this.formats.getVehicleClassFromLabel(this.props.vehicleClassLabel) }
                            distanceToVehicleFormmatter={this.props.distanceToVehicleFormmatter}
                            distanceToVehicle={this.props.distanceToVehicle}
                            gasLevel={this.props.gasLevel}
                        />
                        <ButtonsRow
                            onPressReserveButton={this.props.onPressReserveButton}
                            onPressStartButton={this.props.onPressStartReservationButton}
                            vehicle={this.props.vehicle}
                            reserveInProgress={ this.props.reserveInProgress }
                        />
                        <RateRow
                            vehicleRate={this.props.vehicleRate}
                            vehicleRateHours={this.props.vehicleRateHours}
                        />
                        <AddressRow
                            vehicle={this.props.vehicle}
                            isLoading={this.props.isLoadingAddress}
                            streetAddressModal={this.props.streetAddress}
                            stateAddressModal={this.props.stateAddress}
                            goToMap={this.props.goToMapApp}
                            goToMapExternal={this.props.goToMapExternal}
                        />
                    </View>
                </Modal>
            </GestureRecognizer>
        );
    }
}

export default VehicleModal;
