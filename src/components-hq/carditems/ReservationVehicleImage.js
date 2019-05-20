import React, { Component } from 'react';
import { View, Image } from 'react-native'
import { Body, CardItem } from "native-base";
import { reservationVehicleImageStyle as styles } from './styles';


class ReservationVehicleImage extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <CardItem>
                <Body>
                    <View style={ this.styles.classImageWrapper }>
                        <Image source={ {uri: this.props.imageURL } } resizeMode="contain" resizeMethod="scale" style={ this.styles.vehicleImageStyles } />
                    </View>
                </Body>
            </CardItem>
        );
    }
}
export default ReservationVehicleImage;