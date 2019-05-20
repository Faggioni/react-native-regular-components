import React, { Component } from 'react';
import {View, Image} from 'react-native'
import { imageBannerStyles as styles } from "./styles";

class ImageBanner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.imageBannerWrapper }>
                <Image
                    style={this.styles.imageStyles}
                    source={ this.props.imageSrc }
                    resizeMode="contain"
                />
            </View>
        );
    }
}
export default ImageBanner;