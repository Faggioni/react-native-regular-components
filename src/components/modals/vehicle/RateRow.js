import React, { Component } from "react";
import { View } from 'react-native';
import {
    Icon,
    Text
} from "native-base";
import { rateRowStyles as styles } from "./styles";

class RateRow extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.descriptionRowWrapper }>
                <View style={ this.styles.iconWrapper }>
                    <Icon name="watch-later" type="MaterialIcons" style={ this.styles.iconStyles } />
                </View>
                <View style={ this.styles.descriptionWrapper }>
                    <View style={ this.styles.rateTagStyle }>
                        <Text style={ this.styles.descriptionMainTextStyles }>Current Rate</Text>
                    </View>
                </View>
                <View style={ this.styles.descriptionContentWrapper }>
                    <View style={ this.styles.rateTagStyle }>
                        <Text style={ this.styles.descriptionMainContentTextStyles }>{ this.props.vehicleRate + '/min' }</Text>
                        <Text style={ this.styles.descriptionMainContentTextStyles }>{ this.props.vehicleRateHours + '/hr' }</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default RateRow;
