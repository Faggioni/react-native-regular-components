import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Body, CardItem, Left } from "native-base";
import { reservationDateInformationItem as styles } from './styles';


class ReservationDateInformationItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <CardItem>
                <Left>
                    <Body style={ { marginLeft: 0 }}>
                    <View style={ this.styles.dateTimeTitleWrapper }>
                        <Text style={ this.styles.cardTitle }>Date & Time</Text>
                    </View>
                    <View style={ this.styles.dateInformationWrapper }>
                        <View style={ this.styles.dateInformationFormat }>
                            <View style={ this.styles.dateInformationRow }>
                                <Text style={ this.styles.blueText } note>Pickup Date: { this.props.pickUpDate }</Text>
                                <Text style={ this.styles.blueText } note>Pickup Time: { this.props.pickUpTime }</Text>
                                <Text style={ this.styles.blueText } note>Pickup Location: { this.props.pickUpLocation }</Text>
                            </View>
                            <View style={ this.styles.dateInformationRow }>
                                <Text style={ this.styles.blueText } note>Return Date: { this.props.returnDate }</Text>
                                <Text style={ this.styles.blueText } note>Return Time: { this.props.returnTime }</Text>
                                <Text style={ this.styles.blueText } note>Return Location: { this.props.returnLocation }</Text>
                            </View>
                        </View>
                    </View>
                    </Body>
                </Left>
            </CardItem>
        );
    }
}
export default ReservationDateInformationItem;