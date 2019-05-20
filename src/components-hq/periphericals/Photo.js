import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
    Button
} from 'native-base';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import { pickUpReservationPhoto, pickUpReservationPhotoDone } from '../../modules/reservations/actions';
import { Actions } from 'react-native-router-flux';
class Photo extends Component {
    constructor(props) {
        super(props);
        this.styles = styles;
    }
    takePicture = async function(){
        try{
            if (this.camera) {
                const options = { quality: 0.5, base64: true };
                const data = await this.camera.takePictureAsync(options);
                this.props.pickUpReservationPhotoDone(data);
                Actions.pop(data);
                Actions.refresh({ isComingNewPhoto:true, pickUpPhotoImages: data });
            }
        }catch(error){
        }
    };
    render() {
        return(
            <View style={ styles.container }>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style = { styles.preview }
                    type={ RNCamera.Constants.Type.back }
                    flashMode={ RNCamera.Constants.FlashMode.on }
                    permissionDialogTitle={ 'Permission to use camera' }
                    permissionDialogMessage={ 'We need your permission to use your camera phone' }
                    zoom= { 0 }
                />

                <View style={ this.styles.snapButtonWrapper }>
                    <TouchableOpacity
                        onPress={ this.takePicture.bind(this) }
                        style = { this.styles.capture }
                    >
                        <Text style={ this.styles.snapPhotoStyle }>Take a Picture</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
        height:128,
        width: 128,
        borderRadius: 64
    },
    snapPhotoStyle:{
        fontSize: 14
    },
    snapButtonWrapper: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
const mapStateToProps = ( { reservations } ) => {
    const { lastPickUpPhoto } = reservations.lastPickUpPhoto;
    return { lastPickUpPhoto };
};
export default connect(mapStateToProps,{ pickUpReservationPhoto, pickUpReservationPhotoDone })(Photo);
