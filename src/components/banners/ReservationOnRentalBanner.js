import React, { Component } from 'react';
import { View, Text } from 'react-native'
import ImageBanner from "./ImageBanner";
import ReservationSummaryScreenStopwatch from "../stopwatch/ReservationSummaryScreenStopwatch";
import { reservationOnRentalBannerStyles as styles } from "./styles";


class ReservationOnRentalBanner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <View style={ this.styles.itemWrapper }>
                    <View style={ this.styles.vehicleImageWrapper }>
                        <View style={ this.styles.vehicleImageWrapper }>
                            <ImageBanner
                                imageSrc={ this.props.vehicleImage }
                            />
                            <View style={ this.styles.textFieldsWrapper }>
                                <Text style={ this.styles.textStyles }>{ this.props.vehicleLabel }</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={ this.styles.itemWrapper }>
                    <View style={ this.styles.itemWrapper }>
                        <ReservationSummaryScreenStopwatch
                            initialCountdownTime={ this.props.currentTime }
                            onTick={ this.props.onTick }
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default ReservationOnRentalBanner;