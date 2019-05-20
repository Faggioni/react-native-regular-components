import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Card, CardItem, Form } from "native-base";
import ReservationPicker from "../pickers/ReservationPicker";
import ReservationFuelPicker from "../pickers/ReservationFuelPicker";
import ReservationInput from '../inputs/ReservationInput';
import ReservationDatepicker from "../datepickers/ReservationDatepicker";
import ReservationCheckbox from "../checkboxes/ReservationCheckbox";
import SubmitButton from "../buttons/SubmitButton";
import { pickupReturnFormStyles as styles } from './styles';
import CameraSpinner from "../spinners/CameraSpinner";
import NoOptions from '../../components/formmessages/NoOptions';

class PickupReturnForm extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }

    showButton() {
        if ( this.props.isLoadingSubmit ) {
            return <CameraSpinner />;
        } else {
            return <SubmitButton
                title="Save"
                buttonText="Save Reservation"
                onPress={this.props.onSubmit}
            />;
        }
    }
    renderVehicleInput(){
        if(this.props.screenMode){
            return(
                <NoOptions
                    label="Vehicle"
                    message={this.props.selectedVehicleForReturn.label}
                />
            );
        }else{
            if(this.props.vehicleOptions.length > 0){
                return(
                    <ReservationPicker
                        options={this.props.vehicleOptions}
                        onValueChange={this.props.onChangeVehicle}
                        placeholder="Select Vehicles"
                        label="Assign Vehicle"
                        selectedValue={this.props.selectedVehicle}
                    />
                );
            }else{
                return(
                    <NoOptions
                        label="Vehicles"
                        message="No vehicles available"
                    />
                );
            }
        }
    }
    onPressCheckbox(){
        this.props.onPressRecalculates();
    }
    render() {
        return (
            <Form style={this.styles.formStyles}>
                { this.renderVehicleInput() }
                <ReservationPicker
                    options={this.props.locationOptions}
                    onValueChange={this.props.onChangeLocation}
                    placeholder="Select Location"
                    label="Select Location"
                    selectedValue={this.props.selectedLocation}
                />
                <ReservationFuelPicker
                    label={this.props.fuelLabel}
                    placeholder={this.props.fuelPlaceholder}
                    onValueChange={this.props.onChangeFuel}
                    selectedValue={this.props.selectedFuel}
                />
                <ReservationInput
                    label={this.props.odometerLabel}
                    keyboardType="numeric"
                    value={this.props.odometerValue}
                    onChangeText={this.props.onChangeOdometer}
                    placeholder="Odometer"
                />
                <ReservationDatepicker
                    date={this.props.selectedDate}
                    mode="datetime"
                    format={this.props.dateFormat}
                    confirmButton="Confirm"
                    cancelButton="Cancel"
                    showIcon={false}
                    onDateChange={this.props.onDateChange}
                    placeholder="Select Date"
                    label={ this.props.dateLabel }
                />
                <ReservationCheckbox
                    onPress={this.onPressCheckbox.bind(this)}
                    checked={this.props.isRecalculatesChecked}
                    label={this.props.recalculateLabel}
                />
                {this.showButton()}
            </Form>
        );
    }
}
/*
 * PropTypes Validations
 */
PickupReturnForm.propTypes = {
    locationOptions: Proptypes.array,
    vehicleOptions: Proptypes.array,
    screenMode: Proptypes.bool
};
export default PickupReturnForm;