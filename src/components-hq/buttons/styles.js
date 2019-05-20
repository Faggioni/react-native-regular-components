/*
 * Buttons Components Styles
 */
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import commonColor from '../../theme/variables/commonColor';

export default {
    buttonReservationPickupStyle:{
        backgroundColor: "#4272a8",
        borderRadius: 20
    },
    buttonTextReservationPickupStyle:{
        color:"#fff"
    },
};

/***
 * Login Button
 * @type {{submitButtonStyle: {marginBottom: number, marginTop: number}, textStyle: {color: string}}}
 */
export const loginSubmitButtonStyles = {
    submitButtonStyle: {
        marginBottom: 10,
        marginTop: 20
    },
    textStyle: {
        color: commonColor.hqYellow
    }
};
export const authLoginButton = {
    submitButtonStyle: {
        marginBottom: 10,
        marginTop: 20
    },
    textStyle: {
        color: commonColor.hqYellow
    }
};

export const textButtonStyles = {
    componentWrapper: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    buttonTextStyles: {
        color: '#fff'
    }
};

/***
 * Full Screen Preview Image Button
 */
export const fullScreenPreviewImageButton = {
    capture: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 15,
        width: width * 0.25,
        paddingTop: width * 0.025,
        paddingBottom: width * 0.025
    },
    buttonText: {
        color: '#000',
        fontSize: 14,
    }
};

export const statusButtonStyles = {
    openButtonStyle: {
        backgroundColor: "#F0AD4E"
    },
    buttonsTextStyle: {
        color: "#fff",
        fontSize: 12
    },
    completedButtonStyle:{
        backgroundColor: "#4272A8"
    },
    quoteButtonStyle:{
        backgroundColor: "#777777"
    },
    rentalButtonStyle:{
        backgroundColor: "#50CC99"
    },
    cancelledButtonStyle:{
        backgroundColor: "#cc4915"
    },
    cancelledPaidButtonStyle:{
        backgroundColor: "#50CC99"
    }
};


export const manifestStatusButtonStyles = {
    commonStyles:{
        paddingTop: 5,
        paddingBottom: 5,
        width: width * 0.15,
        borderRadius: 5,
    },
    openButtonStyle: {
        backgroundColor: "#F0AD4E"
    },
    buttonsTextStyle: {
        color: "#fff",
        fontSize: 12,
        textAlign: 'center'
    },
    completedButtonStyle:{
        backgroundColor: "#4272A8"
    },
    quoteButtonStyle:{
        backgroundColor: "#777777"
    },
    rentalButtonStyle:{
        backgroundColor: "#50CC99"
    },
    cancelledButtonStyle:{
        backgroundColor: "#cc4915"
    },
    cancelledPaidButtonStyle:{
        backgroundColor: "#50CC99"
    }
};