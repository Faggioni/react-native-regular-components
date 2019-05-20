import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { tripsDatesDetails as styles } from './styles';
import DatesFormatter from '../../modules/helpers/formatting/DatesFormatter';

class TripsDatesDetails extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.dateFormatter = new DatesFormatter();
    }
    render(){
        return(
            <View style={this.styles.componentWrapper}>
                <View style={this.styles.rowStyles}>
                    <View>
                        <Text style={this.styles.textStyle}>Pickup</Text>
                    </View>
                    <View>
                        <Text style={this.styles.textStyle}>{this.dateFormatter.getDateTimeFormat(this.props.pickupDate)}</Text>
                    </View>
                </View>
                <View style={this.styles.rowStyles}>
                    <View>
                        <Text style={this.styles.textStyle}>Return</Text>
                    </View>
                    <View>
                        <Text style={this.styles.textStyle}>{ this.dateFormatter.getDateTimeFormat(this.props.returnDate) }</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default TripsDatesDetails;