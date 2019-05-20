import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Body, Card, CardItem } from "native-base";
import StatusButton from "../buttons/StatusButton";
import { reservationSummaryStyles as styles } from "./style";
import DataValidator from "../../modules/helpers/validation/DataValidator";

class ReservationSummary extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.validator = new DataValidator();
    }
    showMiscelaneousCharges(){
        if(! this.validator.isEmpty(this.props.miscelaneousChanges)){
            return this.props.miscelaneousChanges.map( (charge) => {
                if( charge.amount.amount !== "0.00"){
                    return (
                        <View key={ charge.name } style={ this.styles.insuranceItemWrapper }>
                            <View style={ this.styles.insuranceItemWrapper }>
                                <Text style={ this.styles.insuranceTextLeft }>{ charge.simple_name + ' (' + parseFloat(charge.base_price).toFixed(0) + '%)'  }</Text>
                                <Text style={ this.styles.insuranceTextRight }>{ charge.amount.amount_for_display }</Text>
                            </View>
                        </View>
                    );
                }
            });
        }
    }
    showAdditionalCharges(){
        if(! this.validator.isEmpty( this.props.additionalCharges ) ){
            return this.props.additionalCharges.map( charge => {
                return (
                    <View key={ charge.id } style={ this.styles.insuranceItemWrapper }>
                        <View style={ this.styles.priceSubtitleWrapper }>
                            <Text style={ this.styles.summaryTitle }>Additional Charges</Text>
                        </View>
                        <View style={ this.styles.insuranceTextWrapper }>
                            <Text style={ this.styles.insuranceTextLeft }>{ charge.quantity } x { charge.name }</Text>
                            <Text style={ this.styles.insuranceTextRight }>{ charge.price.amount_for_display }</Text>
                        </View>
                    </View>
                );
            });
        }
    }
    render(){
        return(
            <Card style={{ backgroundColor: 'green' }}>
                <CardItem header bordered>
                    <View style={ this.styles.subtitleStyle }>
                        <Text style={ this.styles.cardTitle }>Reservation Summary</Text>
                    </View>
                </CardItem>
                <CardItem bordered>
                    <Body style={{ flex: 1 }}>
                        <StatusButton status={ this.props.reservationStatus }/>
                        <View style={ this.styles.priceWrapper }>
                            <View style={ this.styles.priceSubtitleWrapper }>
                                <Text style={ this.styles.summaryTitle }>Base Price</Text>
                            </View>
                            <View style={ this.styles.finalPriceWrapper }>
                                <View style={ this.styles.priceInformationWrapper }>
                                    <Text style={ this.styles.insuranceTextLeft }>{ this.props.insuranceTitle }</Text>
                                    <Text style={ this.styles.insuranceTextRight }>{ this.props.insuranceTotal }</Text>
                                </View>
                            </View>
                            { this.showAdditionalCharges() }
                            <View style={ this.styles.priceSubtitleWrapper }>
                                <Text style={ this.styles.summaryTitle }>Miscellaneous</Text>
                            </View>
                            { this.showMiscelaneousCharges() }
                        </View>
                        <View style={ this.styles.totalPriceWrapper }>
                            <View style={ this.styles.priceSubtitleWrapper }>
                                <Text style={ this.styles.summaryTitle }>Total</Text>
                            </View>
                            <View style={ this.styles.priceInformationWrapper }>
                                <View style={ this.styles.priceInformationWrapper }>
                                    <Text style={ this.styles.priceHelperText }></Text>
                                    <Text style={ this.styles.finalPrice }>{ this.props.total }</Text>
                                </View>
                            </View>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default ReservationSummary;