import React, { Component } from "react";
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { reservationImagePreviewStyles as styles } from './styles';
class ReservationImagePreview extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.imagePreviewWrapper }>
                <TouchableOpacity>
                    <Image
                        source={ { uri: this.props.imgSrc } }
                        style={ this.styles.imagePreviewer }
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
export default ReservationImagePreview;