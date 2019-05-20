import React, { Component } from "react";
import { Circle } from 'react-native-maps';
import { circleStyles as styles } from './styles';

class MapPolygon extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Circle
                center={this.props.center}
                radius={this.props.radius}
                strokeColor={this.styles.strokeColor}
                fillColor={this.styles.fillColor}

            />
        );
    }
}
export default MapPolygon;
