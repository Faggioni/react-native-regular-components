import React, { Component } from "react";
import {
    View,
    Text,
    Icon,
    Button
} from 'native-base';
import { Modal } from 'react-native';

import { loginModalStyles as styles } from './styles';
import ModalSpinner from '../../spinners/ModalSpinner';
import ModalLoginInput from "../../inputs/ModalLoginInput";
import ModalLoginInputSecure from '../../inputs/ModalLoginInputSecure';
import LoginModalButton from '../../buttons/LoginModalButton';
import GestureRecognizer from 'react-native-swipe-gestures';
import commonColor from "../../../theme/variables/commonColor";

class LoginModal extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.configSwipeTracker = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        this.state = {
            passwordHidden: true
        };
    }
    onSwipeDown(){
        this.props.onRequestClose();
    }
    showButtonContent(){
        if(this.props.isLoading){
            return(
                <ModalSpinner />
            )
        }else{
            return(
                <View style={ { flexDirection: 'column', justifyContent: 'space-between', paddingTop: '10%' } }>
                    <View style={ {  flexDirection: 'row', justifyContent: 'space-between' } }>
                        <LoginModalButton
                            onPress={ this.props.onPressResetPassword }
                            textButton="Reset Password"
                        />
                        <LoginModalButton
                            onPress={ this.props.onPressSubmitButton }
                            textButton="Login"
                            caps={ true }
                        />
                    </View>
                </View>
            );
        }
    }
    onPressShowPasswordButton(){
        this.setState({ passwordHidden: ! this.state.passwordHidden });
    }
    render(){
        return(
            <GestureRecognizer
                onSwipeDown={ this.onSwipeDown.bind(this) }
                config={ this.configSwipeTracker }
            >
                <Modal
                    animationType="slide"
                    style={ this.styles.modalStyles }
                    visible={ this.props.visible }
                    onRequestClose={ this.props.onRequestClose }
                    hideModalContentWhileAnimating={ true }
                    onBackButtonPress={ this.props.onBackButtonPress }
                    transparent
                >
                    <View style={ this.styles.loginScreenWrapper }>
                        <Button
                            transparent
                            style={{
                                position:'absolute',
                                right:5,
                                top: 5,
                                zIndex:5
                            }}
                            onPress={ this.props.onPressClose }
                        >
                            <Icon type="Ionicons" name="ios-close-circle-outline" style={{
                                color:commonColor.brandPrimary,
                            }}/>
                        </Button>

                        <View style={ [ this.styles.loginRowWrapperStyle ] }>
                            <View style={ this.styles.formWrapper }>
                                <View style={ this.styles.formInnerWrapper } >
                                    <Text style={ this.styles.headerTextStyle }>Please login to your ZÜN account</Text>
                                    <View>
                                        <ModalLoginInput
                                            placeholder={ this.props.userEmailPlaceholder }
                                            value={ this.props.userEmailValue }
                                            onChangeText={ this.props.onChangeUserEmail }
                                        />
                                        <ModalLoginInputSecure
                                            placeholder={ this.props.userPasswordPlaceholder }
                                            value={ this.props.userPasswordValue }
                                            onChangeText={ this.props.onChangeUserPassword }
                                            last={ true }
                                        />
                                        { this.showButtonContent() }
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>
        );
    }
}
export default LoginModal;
