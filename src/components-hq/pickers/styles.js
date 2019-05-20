/***
 * Styles from Pickers
 */
import { Dimensions } from 'react-native';


import commonColor from '../../theme/variables/commonColor';
const { height, width } = Dimensions.get('window');
/*
 * Reservation Picker Styles
 */

export const reservationPickerStyles = {
    placeholderIconColor: commonColor.caagInputsBorderColor,
    itemTextStyle : {
        color: "#000"
    },
    pickerWrapper: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: commonColor.caagInputsBorderColor,
    },
    labelWrapper:{
        paddingBottom: 5
    },
    textInputStyle:{
        color: commonColor.appGeneralFontColor,
        borderColor: commonColor.caagInputsBorderColor,
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        paddingTop: 20
    },
    labelStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 16
    },
    pickerStyle: {
        width: '100%'
    }
};

/*
 * Reservations Fuel
 */
export const reservationFuelPickerStyles = {
    pickerWrapper: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: commonColor.caagInputsBorderColor
    },
    labelWrapper: {
        paddingBottom: 5
    },
    textInputStyle:{
        color: commonColor.appGeneralFontColor,
        borderColor: commonColor.caagInputsBorderColor,
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        paddingTop: 20
    },
    labelStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 16
    },
    datePickerStyle:{
        dateInput:{
            borderColor: commonColor.caagInputsBorderColor,
            borderWidth: 1,
            borderRadius: 5,
            shadowColor: '#ccc',
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
        },
        dateText: {
            color: commonColor.appGeneralFontColor
        }
    },
    pickerStyle:{
        width: '100%'
    }
};


/**
 * HQ Region Picker
 */
export const hqRegionPickerStyle = {
    iconStyles:{
        color: '#fff'
    },
    pickerWrapper:{
        marginRight: width * 0.10,
        marginLeft: width * 0.10
    }
};