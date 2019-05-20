/*
 * Banner Components Styles
 */
import { Dimensions } from 'react-native';

import commonColor from "../../theme/variables/commonColor";
let { width, height } = Dimensions.get('window');

export const imageBannerStyles = {
    imageBannerWrapper: {
        flex:1,
        height: 0.15 * height
    },
    imageStyles: {
        flex:1,
        height: undefined,
        width: undefined,
    }
};

/*
 *  Reservation On Rental Banner Styles
 */
export const reservationOnRentalBannerStyles = {
    componentWrapper: {
        flexDirection:'row',
        marginLeft: '5%',
        marginRight: '5%',
    },
    itemWrapper: {
        flex:1,
    },
    vehicleImageWrapper: {
        height: width / 3
    },
    textStyles: {
        color: commonColor.brandSecondaryPalettePrimary,
        fontSize:18,
        lineHeight: 24,
        fontFamily: commonColor.fontFamilyBold
    },
    textFieldsWrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

/*
 *  Reservation On Rental Banner Styles
 */
export const reservationBannerStyles = {
    componentWrapper: {
        flexDirection:'row'
    },
    itemWrapper: {
        flex:1
    },
    vehicleImageWrapper: {
        height: width * 0.25
    },
    textStyles: {
        color: commonColor.brandSecondaryPalettePrimary,
        fontSize:18,
        lineHeight: 24,
        fontFamily: commonColor.fontFamilyBold
    },
    textFieldsWrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};


/*
 *  Reservation Trips Banner Styles
 */
export const reservationTripsBannerStyles = {
    componentWrapper: {
        flexDirection:'row',
        marginLeft: '5%',
        marginRight: '5%'
    },
    itemWrapper: {
        flex:1
    },
    vehicleImageWrapper: {
        height: width / 3
    },
    textStyles: {
        color: commonColor.brandSecondaryPalettePrimary,
        fontSize:18,
        lineHeight: 24,
        fontFamily: commonColor.fontFamilyBold
    },
    textFieldsWrapper: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};