import React, { Component } from "react";
import {
    Icon,
    FooterTab,
    Button,
    Footer as FooterNB,
    Text,
} from "native-base";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { mainScreenFooterStyles as styles } from "./styles";
import PreReservationStatusHelper from '../../modules/helpers/reservations/prereservations/PreReservationStatusHelper';
import ReservationStatusHelper from '../../modules/helpers/reservations/reservations/ReservationStatusHelper';
import { goToTripScreen } from '../../modules/footer/actions/FooterActions';

class MainScreenFooter extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
        this.statusHelper = new PreReservationStatusHelper();
        this.reservationStatusHelper = new ReservationStatusHelper();
    }

    onPressVehiclesButton() {
        Actions.vehicleScreen();
    }

    onPressPreReservationButton() {
        Actions.startReservationReservationModule();
    }

    onPressReservationSummaryButton() {
        if ( this.reservationStatusHelper.isOnRentalStatusWithPartialComplete( this.props.reservationStatus ) ) {
            Actions.finishTripReservationModuleScreen();
        } else {
            Actions.finishReservationReservationModule();
        }
    }
    onPressReservationPayButton(){
        Actions.finishTripReservationModuleScreen();
    }
    showLastElementOnFooter() {
        if ( this.statusHelper.isInProgressStatus( this.props.vehiclePreReserveStatus ) ) {
            return (
                <Button onPress={this.onPressPreReservationButton.bind( this )}>
                    <Icon
                        name="alarm-on"
                        type="MaterialIcons"
                        style={this.styles.iconStyles}
                    />
                    <Text style={this.styles.textStyle}>Reserve</Text>
                </Button>
            );
        } else if ( this.reservationStatusHelper.isExclusivelyOnRentalStatus( this.props.reservationStatus ) ) {
            return (
                <Button onPress={this.onPressReservationSummaryButton.bind( this )}>
                    <Icon
                        name="description"
                        type="MaterialIcons"
                        style={this.styles.onRentalTextStyle}
                    />
                    <Text style={this.styles.onRentalTextStyle}>End Trip</Text>
                </Button>
            );
        } else if ( this.reservationStatusHelper.isOnRentalStatusWithPartialComplete( this.props.reservationStatus ) ) {
            return (
                <Button onPress={this.onPressReservationSummaryButton.bind( this )}>
                    <Icon
                        name="description"
                        type="MaterialIcons"
                        style={this.styles.onWaitingForCompletionTextStyle}
                    />
                    <Text style={this.styles.onWaitingForCompletionTextStyle}>End Trip</Text>
                </Button>
            );
        } else if( this.reservationStatusHelper.isOnRentalStatusWaitingForPayment(this.props.reservationStatus) ){
            return (
                <Button onPress={this.onPressReservationPayButton.bind( this )}>
                    <Icon
                        name="description"
                        type="MaterialIcons"
                        style={this.styles.onWaitingForCompletionTextStyle}
                    />
                    <Text style={this.styles.onWaitingForCompletionTextStyle}>Pay Trip</Text>
                </Button>
            );
        }else {
            return (
                <Button onPress={this.onPressVehiclesButton.bind( this )}>
                    <Icon
                        name="directions-car"
                        type="MaterialIcons"
                        style={this.styles.iconStyles}
                    />
                    <Text style={this.styles.textStyle}>Vehicles</Text>
                </Button>
            );
        }
    }

    onPressTripsButton() {
        this.props.goToTripScreen(this.props.userIsLoggedIn);
    }

    render() {
        return (
            <FooterNB>
                <FooterTab style={this.styles.footerWrapper}>
                    <Button onPress={() => Actions.drawerOpen()}>
                        <Icon
                            name="home"
                            type="MaterialIcons"
                            style={this.styles.iconStyles}
                        />
                        <Text style={this.styles.textStyle}>Menu</Text>
                    </Button>
                    <Button onPress={this.onPressTripsButton.bind( this )}>
                        <Icon
                            name="highway"
                            type="MaterialCommunityIcons"
                            style={this.styles.iconStyles}
                        />
                        <Text style={this.styles.textStyle}>Trips</Text>
                    </Button>
                    {this.showLastElementOnFooter()}
                </FooterTab>
            </FooterNB>
        );
    }
}

const mapStateToProps = ( { vehiclePreReserve, reservation, login } ) => {
    const vehiclePreReserveStatus = vehiclePreReserve.currentPreReserveStatus;
    let reservationStatus = reservation.currentReservationStatus;
    let userIsLoggedIn = login.isLoggedIn;
    return { vehiclePreReserveStatus, reservationStatus, userIsLoggedIn };
};
export default connect( mapStateToProps, { goToTripScreen } )( MainScreenFooter );
