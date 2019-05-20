import React, { Component } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { vehicleListItemStyles as styles } from "./styles";
import WordFormatting from '../../modules/helpers/formatting/WordFormmating';
import VehicleStringFormmatter from '../../modules/helpers/formatting/VehicleStringFormmater';

class VehicleListItem extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
        this.formatHelper = new WordFormatting();
        this.stringFormmater = new VehicleStringFormmatter();
    }

    onPressAVehicle() {
        this.props.onPressAvehicle( this.props.vehicle );
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.onPressAVehicle.bind( this )}
                style={this.styles.vehicleListWrapper}
            >
                <View style={{ flex: 8 }}>
                    <Text style={this.styles.plateTextStyle}>{this.props.vehicle.label}</Text>
                </View>
                <View style={{ flex: 6 }}>
                    <Text style={this.styles.odometerTextStyle}>{this.stringFormmater.getDistanceToTheVehicleWithoutValidation( this.props.vehicle )}</Text>
                    <Text style={this.styles.fuelLevelTextStyle}>{'Fuel: ' + this.props.vehicle.fuel_level + '/8'}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default VehicleListItem;
