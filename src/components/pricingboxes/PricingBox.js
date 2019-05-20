import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { pricingBoxStyles as styles } from './styles';
import PriceItem from './priceitems/PriceItem';


class PricingBox extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <View>
                    <Text style={ this.styles.titleStyles }>Rates</Text>
                </View>
                <PriceItem
                    price={ this.props.price.minute_rate.amount_for_display }
                    label="per minute"
                />
                <PriceItem
                    price={ this.props.price.hourly_rate.amount_for_display }
                    label="per hour"
                />
                <PriceItem
                    price={ this.props.price.daily_rate.amount_for_display }
                    label="per day"
                />
                <PriceItem
                    price={ this.props.price.weekly_rate.amount_for_display }
                    label="per week"
                />
            </View>
        );
    }
}
export default PricingBox;