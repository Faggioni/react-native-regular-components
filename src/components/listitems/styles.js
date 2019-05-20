/*
 * List Items Components Styles
 */
import commonColor from '../../theme/variables/commonColor';

/*
 * Vehicle List Item
 */
export const vehicleListItemStyles = {
    vehicleListWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: commonColor.accordionBorderColors
    },
    plateTextStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 20,
        fontWeight: '400',
        fontFamily: commonColor.fontFamily
    },
    addressTextStyle: {
        color: commonColor.accordionBorderColors,
        fontSize: 14,
        fontFamily: commonColor.fontFamily
    },
    odometerTextStyle: {
        color: commonColor.appGeneralFontColor,
        fontFamily: commonColor.fontFamily,
        textAlign: 'right'
    },
    fuelLevelTextStyle:{
        color: commonColor.appGeneralFontColor,
        fontFamily: commonColor.fontFamily,
        textAlign: 'right'
    }
};

/*
 * Charges List Item
 */
export const chargeListItemStyles = {
    textStyles:{
        fontFamily:commonColor.fontFamily,
    },
    leftWrapper:{
        flex:10,
    },
    rightWrapper:{
        flex:4,
    }
};

/**
 * Charges List Item Header
 */
export const chargeHeaderListItemStyles = {
    headerTextStyle: {
        //fontWeight: 'bold',
        fontFamily: commonColor.fontFamilyBold
    }
};

export const chargesFooterListItemStyles = {
    headerTextStyle: {
        fontFamily: commonColor.fontFamilyBold,
        color: commonColor.brandSecondaryPalettePrimary
    },
    leftWrapper: {
        flex:6,
        background: commonColor.brandSecondaryPalettePrimary
    },
    rightWrapper:{
        flex:4
    }
};


/*
 * Reservation List Item
 */
export const reservationListItemStyles = {
    reservationListWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: commonColor.accordionBorderColors

    },
    plateTextStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 20,
        fontWeight: '400',
        fontFamily: commonColor.fontFamily
    },
    addressTextStyle: {
        color: commonColor.accordionBorderColors,
        fontSize: 14,
        fontFamily: commonColor.fontFamily
    },
    ammountTextStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 20,
        fontFamily: commonColor.fontFamily
    },
    fuelLevelTextStyle:{
        color: commonColor.appGeneralFontColor,
        fontFamily: commonColor.fontFamily
    }
};
