import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { reservationListItemStyles as styles } from './styles';

/**
 * Helpers
 */
import ReservationsStringFormmater from '../../modules/helpers/formatting/ReservationsStringFormmater';


class ReservationListItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.formats = new ReservationsStringFormmater();
    }
    onPressReservation(){
        this.props.onPressReservation(this.props.reservation);
    }
    render(){
        return(
            <TouchableOpacity
                onPress={ this.onPressReservation.bind(this) }
                style={ this.styles.reservationListWrapper }
            >
                <View style={ { flex:7 } }>
                    <Text style={ this.styles.plateTextStyle }>{ this.formats.getReservationIdFormat(this.props.reservation.id) }</Text>
                    <Text style={ this.styles.addressTextStyle }>{ this.formats.getPickupDateFormat(this.props.reservation.pick_up_date) }</Text>
                    <Text style={ this.styles.addressTextStyle }>{ this.formats.getReturnDateFormat( this.props.reservation.return_date ) }</Text>
                </View>
                <View style={ { flex: 3 } }>
                    <View style={ { flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 } }>
                        <Text numberOfLines={1} style={ this.styles.ammountTextStyle }>{ this.props.reservation.total_price.amount_for_display }</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}
export default ReservationListItem;