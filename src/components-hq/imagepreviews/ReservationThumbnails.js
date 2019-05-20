import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import {
    Button,
    Icon
} from 'native-base';
import { resevationThumbnailsStyles as styles } from './styles';
import Lightbox from 'react-native-lightbox';

class ReservationThumbnails extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    showThumbnails(){
        if(this.props.thumbnails.length > 0){
         return this.props.thumbnails.map( (thumbnail) => {
             return (
                 <View key={ thumbnail.id } style={ { padding: 5 } } >
                     <Lightbox renderContent={ this.showSingleImage.bind(this, thumbnail) }>
                             <Image
                                 style={ this.styles.imageThumbnailStyles }
                                 source={ { uri: thumbnail.public_link } }
                             />
                     </Lightbox>
                 </View>
             );
         });
        }else{
            return(
                <View style={ this.styles.summaryItemWrapper }>
                    <View>
                        <Text style={ this.styles.contentStyle }>No photos Uploaded</Text>
                    </View>
                </View>
            );
        }
    }
    showSingleImage(image){
        return(
            <View style={ { height: this.height, width:this.width} }>
                <Image
                    style={ { height: this.height, width:this.width } }
                    source={ { uri: image.public_link  } }
                />
            </View>

        );
    }
    showImages(){
        return this.props.thumbnails.map( (thumbnail) => {
            return (
                <View key={ thumbnail.id }>
                    <Image
                        style={ { height: this.height, width:this.width } }
                        source={ { uri: thumbnail.public_link } }
                    />
                </View>
            );
        });
    }
    showUploadButton(){
        if(this.props.status === 'open' && !(this.props.mode)){
            return(
                <Button iconRight style={ this.styles.uploadButton } onPress={ this.props.onPressAddImageButton }>
                    <Text style={ this.styles.buttonText } >Upload Photo</Text>
                    <Icon style={ this.styles.buttonText } type="FontAwesome" name='upload' />
                </Button>
            );
        }else if(this.props.status === 'rental' && this.props.mode){
            return(
                <Button iconRight style={ this.styles.uploadButton } onPress={ this.props.onPressAddImageButton }>
                    <Text style={ this.styles.buttonText } >Upload Photo</Text>
                    <Icon style={ this.styles.buttonText } type="FontAwesome" name='upload' />
                </Button>
            );
        }
    }
    render(){
    return(
        <View style={ this.styles.componentWrapper }>
            { this.showUploadButton() }
            <View style={ this.styles.thumbnailsWrapper }>
                { this.showThumbnails() }
            </View>
        </View>
    );
    }
}
export default ReservationThumbnails;