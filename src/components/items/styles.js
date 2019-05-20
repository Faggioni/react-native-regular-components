/*
 * Descriptions Item Styles
 */
import commonColor from '../../theme/variables/commonColor';

/*
 * PreReserveScreen Item Styles
 */
export const preReserveItemsStyles = {
    preReserveItemWrapperInner:{
        justifyContent:'center',

    },
    preReserveIconStyle: {
        color: commonColor.brandPrimary
    },
    preReserveTextWrapper: {
        justifyContent: 'center'
    },
    preReserveTextStyle: {
        color:commonColor.brandSecondaryPalettePrimary,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: commonColor.fontFamilyBold
    },
    componentWrapper:{
        flexDirection: 'row'
    }
};

/*
 * Reservation Rate Item
 */
export const reservationRateItem = {
    //pricingButtonColor: commonColor.brandPrimary,
    pricingFont: commonColor.fontFamily,
    preReserveItemWrapperInner:{
        justifyContent:'center',
        marginLeft: 10
    },
    preReserveIconStyle: {
        color: commonColor.brandPrimary
    },
    preReserveTextWrapper: {
        justifyContent: 'center'
    },
    preReserveTextStyle: {
        color:commonColor.brandPrimary,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: commonColor.fontFamily
    },
    componentWrapper:{
        flexDirection: 'row'
    },
    pricingStyle: {
        fontSize: 26,
        lineHeight: 30,
        color: commonColor.brandPrimary,
        fontFamily: commonColor.fontFamily
    },
    infoStyles: {
        fontFamily: commonColor.fontFamily
    }
};