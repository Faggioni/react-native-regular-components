import React, { Component } from "react";
import { View, Dimensions,TextInput } from "react-native";
import {
    Text,
    Button
} from "native-base";
const commonColor = require("../../theme/variables/commonColor");
import Modal from "react-native-modal";
import { connect } from 'react-redux';
import CameraSpinner from "../spinners/CameraSpinner";
import Validator from '../../modules/helpers/validation/Validator';

class RentalAgreementModal extends Component {
    constructor(props){
        super(props);
        this.styles = styles;
        let { height, width } = Dimensions.get('window');
        this.height = height;
        this.width = width;
    }
    showButtons(){
        if(this.props.isLoadingEmails){
            return(<CameraSpinner />)
        }else{
            return(
                <View style={ this.styles.buttonWrapper }>
                    <Button iconRight style={ [ this.styles.uploadButton,{marginRight: 20 } ] }  onPress={ this.props.onPressClose }>
                        <Text style={ this.styles.buttonText } >{ this.props.closeButtonText }</Text>
                    </Button>
                    <Button iconRight style={ [this.styles.uploadButton, { marginLeft: '5%'}] } onPress={ this.props.onSendEmail }>
                        <Text style={ this.styles.buttonText } >Send Email</Text>
                    </Button>
                </View>
            );
        }
    }
    render() {
        return (
            <Modal
                isVisible={ this.props.isVisible }
                onSwipe={ this.props.onSwipe }
                hideModalContentWhileAnimating={ true }
                style={{ flex:0 }}
            >
                <View style={ [this.styles.modalWrapper] }>
                    <View style={ this.styles.innerWrapper }>
                        <View style={ this.styles.titleWrapper }>
                            <Text style={ this.styles.modalTitleStyle }>
                                { this.props.title }
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                            <View style={ { flex: 1, paddingTop: '4%' }}>
                                <Text style={ this.styles.modalTextStyle }>To:</Text>
                            </View>
                            <View style={{ flex: 9, paddingTop: '5%' }}>
                                <TextInput
                                    editable = { true }
                                    onChangeText={ this.props.onChangeEmailCC }
                                    value={ this.props.emailCC }
                                    placeholder='user@domain.com'
                                    placeholderTextColor={ commonColor.appGeneralFontColor }
                                    autoCorrect={ false }
                                />
                            </View>
                        </View>
                        { this.showButtons() }
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = {
    textStyle:{
        color: commonColor.inverseTextColor,
        marginBottom: 10
    },
    stylesContentWrapper:{
        paddingBottom: 5,
        marginTop: 20,

    },
    innerWrapper:{
        padding: 20,
        height: 350,
    },
    labelStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 16
    },
    labelWrapper:{
        paddingBottom: 5
    },
    buttonWrapper:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleWrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: commonColor.appGeneralFontColor
    },
    modalWrapper: {
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    uploadButton:{
        backgroundColor: commonColor.caagBlue
    },
    buttonText:{
        color: '#fff'
    },
    modalTitleStyle:{
        fontSize: 18,
        textAlign: 'left',
        color: commonColor.appGeneralFontColor
    },
    modalTextStyle:{
        fontSize: 16,
        color: commonColor.appGeneralFontColor
    }
};
const mapStateToProps = ({ reservationModule }) => {
    const isLoadingEmails = reservationModule.reservationModuleSendingContractByEmailLoading;
    return { isLoadingEmails };
};
export default connect(mapStateToProps,{  })(RentalAgreementModal);
