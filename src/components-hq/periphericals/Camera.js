import React, { Component } from "react";
import { View } from "react-native";
import { cameraStyles as styles } from './styles';
import BackButtonCamera from '../buttons/BackButtonCamera';
import { RNCamera } from 'react-native-camera';
import FIleStorage from '../../modules/helpers/storage/FileStorage';
import BaseController from '../../modules/helpers/controllers/BaseController';
/*
 * Buttons
 */
import TakeAPicture from '../../components/buttons/camera/TakeAPicture';
import FlashButton from '../../components/buttons/camera/FlashButton';
import ChangeCamera from '../../components/buttons/camera/ChangeCamera';

/**
 * Gestures
 */
import LongTapGesture from '../../components/gestures/LongTapGesture';
import PinchGesture from '../../components/gestures/PinchGesture';

/**
 * Handler
 */
import CameraHandler from '../../modules/helpers/periphericals/CameraHandler';

class Camera extends Component {


    constructor(props) {
        super(props);
        this.controller = new BaseController();
        this.styles = styles;
        this.zoomRate = 0.05;
        this.helper = new CameraHandler();
        this.state = {
            // auto - on -off
            flashMode: RNCamera.Constants.FlashMode.auto,
            // front -> true , back -> false
            cameraMode: true,
            //Mode counter
            // mod -> 0 'auto', mod -> 1, 'off', mod -> 2 'on'
            flashModeCounter: 0,
            //iconName off -> flash-off, auto -> flash-auto, on -> flash-on
            flashButtonName: "flash-off",
            zoom: this.zoomRate
        };
    }
    onPinchGestureEvent(event){
        if(event.nativeEvent.scale > 1){
            if(this.state.zoom + this.zoomRate > 1){
                this.setState({ zoom: 1 });
            }else{
                this.setState({ zoom: this.state.zoom + this.zoomRate });
            }
        }else if(event.nativeEvent.scale < 1){
            if(this.state.zoom - this.zoomRate < 0){
                this.setState({ zoom: 0 });
            }else{
                this.setState({ zoom: this.state.zoom - this.zoomRate })
            }
        }
    }
    onPressFlashButton(){
        this.setState({ flashModeCounter: this.state.flashModeCounter + 1 });
        if(this.state.flashModeCounter % 3 === 0){
            this.setState({
                flashButtonName: 'flash-auto',
                flashMode: RNCamera.Constants.FlashMode.auto
            });
        }else if(this.state.flashModeCounter % 3 === 1){
            this.setState({
                flashButtonName: 'flash-off',
                flashMode: RNCamera.Constants.FlashMode.off
            });
        }else if(this.state.flashModeCounter % 3 === 2){
            this.setState({
                flashButtonName: 'flash-on',
                flashMode: RNCamera.Constants.FlashMode.on
            });
        }
    }
    onPressChangeCameraMode(){
        this.setState({ cameraMode: ! this.state.cameraMode });
    }
    takePicture(){
        this.props.onTakePicture(this.camera);
    }
    onPressBackButton(){
        console.log('pressBack');
    }
    startRecording(){
        this.props.onStartRecording(this.camera);
    }
    stopRecording(){
        this.camera.stopRecording();
    }
    render() {
        return(
            <PinchGesture
                onPinchScreen={this.onPinchGestureEvent.bind(this)}>
                <View style={ this.styles.container }>
                    <BackButtonCamera
                        onPress={ this.onPressBackButton }
                    />
                    <View style={{ flex: 1 }}>
                        <RNCamera
                            ref={ref => {
                                this.camera = ref;
                            }}
                            style={styles.preview}
                            type={ (!this.state.cameraMode) ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back }
                            flashMode={this.state.flashMode}
                            autoFocus={RNCamera.Constants.AutoFocus.on}
                            permissionDialogTitle={'Permission to use camera'}
                            permissionDialogMessage={'We need your permission to use your camera phone'}
                            zoom={this.state.zoom}
                        />
                        <View style={this.styles.buttonBarWrapper}>
                            <FlashButton
                                onPress={this.onPressFlashButton.bind(this)}
                                iconName={this.state.flashButtonName}
                            />
                            <LongTapGesture
                                onSingleTap={this.takePicture.bind(this)}
                                onLongTap={this.startRecording.bind(this)}
                                onLongTapEnd={this.stopRecording.bind(this)}
                            >
                                <TakeAPicture />
                            </LongTapGesture>
                            <ChangeCamera
                                onPress={this.onPressChangeCameraMode.bind(this)}
                            />
                        </View>
                    </View>
                </View>
            </PinchGesture>
        );
    }
}
export default Camera;
