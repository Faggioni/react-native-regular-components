import React, { Component } from "react";
import { View, Image } from 'react-native';

class PreviewImage extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <Image
                    style={ this.styles.imageStyle }
                />
            </View>
        );
    }
}
const styles = {
    componentWrapper:{
        flex: 1
    },
    imageStyle:{
        flex: 1
    }
};
export default PreviewImage;