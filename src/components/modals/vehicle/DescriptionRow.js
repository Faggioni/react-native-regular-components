import React, { Component } from "react";
import { View } from 'react-native';
import {
    Icon,
    Text
} from "native-base";
import { descriptionRowStyles as styles } from "./styles";

class DescriptionRow extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }

    showDistanceToCar() {
        if ( this.props.distanceToVehicle != 0 ) {
            return (
                <View style={this.styles.distanceToCarWrapper}>
                    <Icon style={this.styles.iconStyles} name="map-marker-multiple" type="MaterialCommunityIcons"/>
                    <Text style={this.styles.descriptionMainTextStyles}>{this.props.distanceToVehicleFormmatter}</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={this.styles.descriptionRowWrapper}>
                <View style={this.styles.iconWrapper}>
                    <Icon name="time-to-leave" type="MaterialIcons" style={this.styles.iconStyles}/>
                </View>
                <View style={this.styles.descriptionWrapper}>
                    <View>
                        <Text style={this.styles.descriptionMainTextStyles}>{this.props.vehiclePlate}</Text>
                        <Text style={this.styles.descriptionTextStyles}>{this.props.vehicleLabel}</Text>
                    </View>
                </View>
                <View style={this.styles.descriptionContentWrapper}>
                    <View style={this.styles.distanceToCarWrapper}>
                        <Icon style={[this.styles.iconStyles, {paddingRight: 10, fontSize: 26}]} name="map-marker-multiple" type="MaterialCommunityIcons"/>
                        <Text style={this.styles.descriptionMainTextStyles}>{this.props.distanceToVehicleFormmatter}</Text>
                    </View>
                    <View style={this.styles.gasTagWrapper}>
                        <Text style={this.styles.descriptionTextStyles}>{'Fuel: ' + this.props.gasLevel}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default DescriptionRow;
