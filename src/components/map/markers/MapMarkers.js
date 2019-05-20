import React, { Component } from "react";
import { Marker } from 'react-native-maps';
import { mapMarkerStyles as styles } from "./styles";
class MapMarkers extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    onPress(event){
        //This is the props from the screen
        this.props.onPress(this.props.vehicle);
    }
    render(){
        return(
            <Marker
                coordinate={ this.props.coordinate }
                pinColor={ this.styles.color }
                image={ this.props.image }
                onPress={ this.onPress.bind(this) }
            />
        );
    }
}
export default MapMarkers;
