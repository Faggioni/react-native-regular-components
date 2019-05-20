import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'native-base';

import { priceItemStyles as styles } from './styles'

class PriceItem extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }

    render() {
        return (
            <View style={this.styles.componentWrapper}>
                <Text style={this.styles.textPricingStyles}>{this.props.price}</Text>
                <Text style={this.styles.textTagStyles}>{this.props.label}</Text>
            </View>
        );
    }
}

export default PriceItem;
