import React, { Component } from "react";
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import Circle from '../polygons/Circle';
import { mapMarkerStyles as styles } from "./styles";


const pinImage = require('../../../assets/imgs/map/pin/user/pin/pin.png');


class UserMaker extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.pinImage = pinImage;
    }
    onPress(){
        this.props.onPress();
    }

    showCircle(){
        if((10 < this.props.radius) && ( this.props.radius < 80)){
            return(
                <Circle
                    center={this.props.coordinate}
                    radius={ this.props.radius }
                />
            );
        }else if(this.props.radius > 80 ){
            return(
                <Circle
                    center={this.props.coordinate}
                    radius={ 80 }
                />
            );
        }
    }
    render(){
        return(
            <View>
                { this.showCircle() }
                <Marker
                    coordinate={ this.props.coordinate }
                    pinColor={ this.styles.color }
                    image={ require('../../../assets/imgs/map/pin/user/pin/pin.png') }
                    onPress={ this.onPress.bind(this) }
                />
            </View>

        );
    }
}
export default UserMaker;
