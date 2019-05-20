import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {
    Left,
    Body
} from 'native-base';
import StatusButton from '../buttons/StatusButton';
import DateFormats from '../../modules/helpers/format/DateFormats';

/**
 * Helpers
 */
import ReservationsValidator from '../../modules/helpers/validation/ReservationsValidator';


/**
 * Styles
 */
import { reservationListItemStyles as styles } from './styles';



class ReservationsItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.dateFormat = new DateFormats();
        this.validator = new ReservationsValidator();
        let { width, height } = Dimensions.get('window');
        this.width = width;
        this.height = height;
    }
    onPressReservation(){
        this.props.onPressReservation(this.props.reservation);
    }
    showPhoneNumber(){
        if(! this.validator.isEmpty(this.props.reservation.customer_phone_number)){
            return(
                <Text style={ this.styles.textStyle } note>Phone Number: { this.props.reservation.customer_phone_number }</Text>
            );
        }
    }
    showContent(){
        if(this.width < 400){
            return(
                <Body style={ this.styles.itemWrapper }>
                    <View style={ { flex: 12 }  }>
                        <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={ this.styles.textStyle }>{ this.validator.getReservationIdFromReservationList(this.props.reservation) }</Text>
                            <Text style={ this.styles.textStyle }>{ ' - ' + this.props.reservation.customer }</Text>
                        </View>
                        { this.showPhoneNumber() }
                        <Text style={ this.styles.textStyle } note>Pickup Date: { this.dateFormat.getDateFromReservationDate( this.props.reservation.pick_up_date ) }</Text>
                        <Text style={ this.styles.textStyle } note>Pickup Time: { this.dateFormat.getTimeFromReservationDate( this.props.reservation.pick_up_date ) }</Text>
                        <Text style={ this.styles.textStyle } note>Return Date: { this.dateFormat.getDateFromReservationDate( this.props.reservation.return_date ) }</Text>
                        <Text style={ this.styles.textStyle } note>Return Time: { this.dateFormat.getTimeFromReservationDate( this.props.reservation.return_date ) }</Text>
                    </View>
                    <View style={ [this.styles.buttonWrapper, { flex: 8 }] } >
                        <StatusButton status={ this.props.reservation.status }/>
                    </View>
                </Body>
            );
        }else{
            return(
                <Body style={ this.styles.itemWrapper }>
                    <View style={ { flex: 3 }  }>
                        <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={ this.styles.textStyle }>{ this.validator.getReservationIdFromReservationList(this.props.reservation) }</Text>
                            <Text style={ this.styles.textStyle }>{ ' - ' + this.props.reservation.customer }</Text>
                        </View>
                        { this.showPhoneNumber() }
                        <Text style={ this.styles.textStyle } note>Pickup Date: { this.dateFormat.getFullDateOnReservationsScreens( this.props.reservation.pick_up_date ) }</Text>
                        <Text style={ this.styles.textStyle } note>Return Date: { this.dateFormat.getFullDateOnReservationsScreens( this.props.reservation.return_date ) }</Text>
                    </View>
                    <View style={ [ this.styles.buttonWrapper, { flex: 1 } ] } >
                        <StatusButton status={ this.props.reservation.status }/>
                    </View>
                </Body>
            );
        }
    }
    render(){
        return(
            <TouchableOpacity onPress={ this.onPressReservation.bind(this) } style={{ flex:1, flexDirection: 'row' }}>
                <Left>
                    { this.showContent() }
                </Left>
            </TouchableOpacity>
        );
    }
}
export default ReservationsItem;