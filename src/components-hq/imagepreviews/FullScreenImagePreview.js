import React, { Component } from 'react';
import { View, Image } from 'react-native'
import { fullScreenPreviewStyles as styles } from './styles';
import BackButtonCamera from "../buttons/BackButtonCamera";
import FullScreenPreviewImageButton from '../buttons/FullScreenPreviewImageButton';

class FullScreenImagePreview extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <BackButtonCamera
                    onPress = { this.props.onPressBackButton }
                />
                <Image
                    style={ this.styles.imageStyle }
                    source={ {uri: 'data:image/png;base64,' + this.props.img } }
                />
                <View style={ this.styles.snapButtonWrapper }>
                    <FullScreenPreviewImageButton
                        onPress={this.props.onPressSaveImageButton}
                        isLoadingScreen={this.props.isLoadingScreen}
                        isLoadingSubmit={this.props.isLoadingSubmit}
                    />
                </View>
            </View>
        );
    }
}
export default FullScreenImagePreview;