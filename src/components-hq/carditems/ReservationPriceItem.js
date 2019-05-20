import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { CardItem } from "native-base";
import { reservationPriceItemStyle as styles } from "./styles";

class ReservationPriceItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <CardItem bordered>
                <View style={ this.styles.featuresWrapper }>
                    <View style={ this.styles.featuresRows }>
                        <Text style={ this.styles.textStyles } >{ this.props.pricePerDay }</Text>
                        <Text style={ this.styles.textStyles } >{ this.props.total }</Text>
                    </View>
                </View>
            </CardItem>
        );
    }
}
export default ReservationPriceItem;