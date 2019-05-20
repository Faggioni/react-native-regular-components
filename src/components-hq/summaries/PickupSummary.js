import React, { Component } from "react";
import {
    Content,
    Card,
} from "native-base";

import SummaryItem from './commons/SummaryItem';
import DateFormats from '../../modules/helpers/format/DateFormats';
import ReservationThumbnails from '../imagepreviews/ReservationThumbnails';
import Validator from '../../modules/helpers/validation/Validator';
import { pickupSummaryStyles as styles } from './style';

class ReservationPickupSummary extends Component {
    constructor(props){
        super(props);
        this.styles = styles;
        this.dates = new DateFormats();
        this.validator = new Validator();
    }
    showFuelLevel(){
        if(this.props.pickup){
            return getFuelLabelFromPickUpInformation(this.props.pickUpInformation.fuel_level_pick_up);
        }else if(this.props.return){
            return getFuelLabelFromPickUpInformation(this.props.pickUpInformation.fuel_level_return);
        }else{
            return 'Fuel';
        }
    }
    showOdometer(){
        if(this.props.pickup){
            return this.props.pickUpInformation.odometer_pick_up;
        }else if(this.props.return){
            return this.props.pickUpInformation.odometer_return;
        }else{
            return 'Odometer';
        }
    }
    showDate(){
        if(this.props.pickup){
            return (
                <SummaryItem title="Pick Up Date" content={ this.dates.getFullDateOnReservationsScreens(this.props.pickUpInformation.pick_up_date) }/>
            );

        }else if(this.props.return){
            return (
                <SummaryItem title="Return Date" content={ this.dates.getFullDateOnReservationsScreens(this.props.pickUpInformation.return_date) }/>
            );
        }else{
            return (
                <SummaryItem title="Return Date" content="Date"/>
            );
        }
    }
    showLocation(){
        if(this.props.pickup){
            return getLocationLabelFromPickupInformation( this.props.pickUpInformation.pick_up_location_id, this.props.locations );
        }else if(this.props.return){
            return getLocationLabelFromPickupInformation( this.props.pickUpInformation.return_location_id, this.props.locations );
        }else{
            return 'Location';
        }
    }
    showVehicle(){
        if(this.props.pickup){
            return this.validator.getLabel(this.props.pickUpInformation.vehicle);
        }else if(this.props.return){
            return this.validator.getLabel(this.props.pickUpInformation.vehicle);
        }else{
            return this.validator.getLabel(this.props.pickUpInformation.vehicle);
        }
    }
    render() {
        return(
            <Content style={ this.styles.contentStyle }>
                <Card style={ this.styles.cardStyle }>
                    <SummaryItem title="Vehicle" content={ this.showVehicle() }/>
                    <SummaryItem title="Location" content={ this.showLocation() }/>
                    <SummaryItem title="Fuel Level" content={ this.showFuelLevel() }/>
                    <SummaryItem title="Odometer" content={ this.showOdometer() }/>
                    { this.showDate() }
                    <ReservationThumbnails
                        thumbnails={ this.props.thumbnails }
                    />
                </Card>
            </Content>
        );
    }
}
export default ReservationPickupSummary;
