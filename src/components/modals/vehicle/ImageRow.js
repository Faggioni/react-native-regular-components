import React, { Component } from "react";
import {Image, View} from 'react-native';
import { imageRowStyles as styles } from "./styles";
import photo from '../../../assets/imgs/vehicle/car-fix.png';


class ImageRow extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.imageRowWrapper }>
                <Image style={ this.styles.imageStyles } source={ this.props.imageSrc } resizeMode="contain"/>
            </View>
        );
    }
}
export default ImageRow;
