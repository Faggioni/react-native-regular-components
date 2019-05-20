import React,{ Component } from 'react';
import {
    View,
    Text
} from 'native-base';
import { Dimensions,TouchableHighlight } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import ReservationRentalAgreementButton from '../buttons/ReservationRentalAgreementButton';
const commonColor = require('../../theme/variables/commonColor');
import { reservationModuleSignatureSubmit } from '../../modules/reservations/actions/ReservationsModuleActions';
import { connect } from 'react-redux';
import FilesNameHandler from '../../modules/helpers/FilesNameHandler';
import SignatureSpinner from '../spinners/SignatureSpinner';
class SignaturePad extends Component {
    constructor(props){
        super(props);
        this.styles = styles;
        let { width, height } = Dimensions.get('window');
        this.width = width;
        this.height = height;
    }

    saveSign() {
        this.refs["sign"].saveImage();
    }
    resetSign() {
        this.refs["sign"].resetImage();
    }
    _onSaveEvent(signature) {
        //other type car_rental.reservations_digital_signature_for_initials //
        let nameHandler = new FilesNameHandler(this.props.reservation.price.reservation.id);
        let signatureData = {
            filename: nameHandler.getReservationSignatureName(),
            file_content_base64: signature.encoded,
            item_id: this.props.reservation.price.reservation.id,
            item_type : 'car_rental.reservations_digital_signature',
            delete_previous: true
        };
        this.props.reservationModuleSignatureSubmit(this.props.reservation.price.reservation.id, signatureData);
    }/*
        This was on the previous signature pad
    _onDragEvent() {
        // This callback will be called when the user enters signature
        //  console.log("dragged");
    }
    saveSign() {
        this.refs["sign"].saveImage();
    }
    resetSign() {
        this.refs["sign"].resetImage();
    }
    _onSaveEvent(signature) {
        //other type car_rental.reservations_digital_signature_for_initials //
        let nameHandler = new FilesNameHandler(this.props.reservation.price.reservation.id);
        let signatureData = {
            filename: nameHandler.getReservationSignatureName(),
            file_content_base64: signature.encoded,
            item_id: this.props.reservation.price.reservation.id,
            item_type : 'car_rental.reservations_digital_signature',
            delete_previous: true
        };
        this.props.reservationModuleSignatureSubmit(this.props.reservation.price.reservation.id, signatureData);
    }
    _onDragEvent() {
        // This callback will be called when the user enters signature
    }
    showButton(){
        if(this.props.isLoadingSubmitSignature){
            return(
                <View style={ this.styles.buttonWrapper }>
                    <SignatureSpinner />
                </View>
            );
        }else{
            return(
                <View style={ this.styles.buttonWrapper }>
                    <ReservationRentalAgreementButton
                        title="Save Signature"
                        onPress={ this.saveSign.bind(this) }
                    />
                    <ReservationRentalAgreementButton
                        title="Reset Signature"
                        onPress={ () => { this.resetSign() } }
                    />
                </View>
            );
        }
    }
    getSignatureTextStyle(){
        if(this.height < 550){
            return this.styles.signatureTitle;
        }else{
            return [ this.styles.signatureTitle, { paddingTop: '2%', paddingBottom: '2%', fontSize: 18} ];
        }
    }*/
    showButton(){
        if(this.props.isLoadingSubmitSignature){
            return(
                <View style={ this.styles.buttonWrapper }>
                    <SignatureSpinner />
                </View>
            );
        }else{
            return(
                <View style={ this.styles.buttonWrapper }>
                    <ReservationRentalAgreementButton
                        title="Save Signature"
                        onPress={ this.saveSign.bind(this) }
                    />
                    <ReservationRentalAgreementButton
                        title="Reset Signature"
                        onPress={ () => { this.resetSign() } }
                    />
                </View>
            );
        }
    }
    getSignatureTextStyle(){
        if(this.height < 550){
            return this.styles.signatureTitle;
        }else{
            return [ this.styles.signatureTitle, { paddingTop: '2%', paddingBottom: '2%', fontSize: 18} ];
        }
    }
    render() {
        return (
            <View style={ this.styles.componentWrapper }>
                <Text style={ this.getSignatureTextStyle() }>{ this.props.title }</Text>
                <Text style={{alignItems:"center",justifyContent:"center"}}>Signature Capture Extended</Text>
                <SignatureCapture
                    style={ this.styles.signature }
                    ref="sign"
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={"portrait"}/>

                <View style={{ flex: 1, flexDirection: "row" }}>
                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => { this.saveSign() } }
                    >
                        <Text>Save</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => { this.resetSign() } }
                    >
                        <Text>Reset</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = {
    componentWrapper:{
        flex: 3,
        justifyContent: 'center'

    },
    signatureTitle: {
        alignItems:"center",
        justifyContent:"center",
        color: "#fff",
        textAlign: 'center'
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    },
    buttonWrapper:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop: '2%'
    },
    signature: {
        flex: 1,
        backgroundColor: "#FFF7D1",
        borderRadius: 5
    },
    signaturePadWrapper: {
        backgroundColor: "#FFF",
        borderColor: commonColor.caagBlue,
        borderRadius: 10
    }
};
const mapStateToProps = ({ reservationModule }) => {
    const reservation = reservationModule.reservationModuleCurrentReservation;
    const isLoadingSubmitSignature = reservationModule.reservationModuleAgreementScreenLoadingOnSubmit;
    return { reservation, isLoadingSubmitSignature };
};
export default connect(mapStateToProps, { reservationModuleSignatureSubmit })(SignaturePad);
