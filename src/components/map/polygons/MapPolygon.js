import React, { Component } from "react";
import { Polygon } from 'react-native-maps';
import { polygonStyles } from './styles';

class MapPolygon extends Component{
    constructor(props){
        super(props);
        this.styles = polygonStyles;
    }
    render(){
        return(
            <Polygon
                coordinates={ this.props.coordinates }
                strokeColor={ polygonStyles.strokeColor }
                fillColor={ polygonStyles.fillColor }
            />
        );
    }
}
export default MapPolygon;
