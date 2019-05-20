import React, { Component } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_ANDROID } from "../../../config/keys";
import { mapRouteStyles as styles } from './styles';


class MapRoute extends Component{
    constructor(props){
        super(props);
        this.styles = styles;

    }
    render(){
        return(
            <MapViewDirections
                origin={ this.props.origin }
                destination={ this.props.destination }
                apikey={ GOOGLE_ANDROID }
                strokeWidth={ 5 }
                mode="walking"
                strokeColor={ this.styles.strokeColor }
                language="en"
            />
        );
    }
}
export default MapRoute;