/*
 * Button Components Styles
 */

import commonColor from '../../theme/variables/commonColor';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

/*
 * Home Console Button Styles
 */
export const homeControlButtonStyles = {
    homeButtonWrapper: {
        flex: 1, backgroundColor: "#fff"
    },
    homeButtonInnerWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    iconStyle: {
        color: "#00a0e1"
    }
};

/*
 * export const Login Modal Button Styles
 */
export const loginModalButtonStyles = {
    buttonWrapper: {
        height: 20
    },
    buttonTextStyle: {
        color: commonColor.brandPrimary,
        fontFamily: commonColor.fontFamily
    }
};

/*
 * General User Large Button
 */
export const generalUseLargeButtonStyles = {
    touchableStyles: {
        width: '100%',
        height: 60,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: commonColor.brandPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: commonColor.brandPrimary,

    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: commonColor.fontFamilyBold
    }
};

/*
 * General User Large Button Custom
 */
export const generalUserLargeButtonCustom = {
    touchableStyles: {
        width: '100%',
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: commonColor.brandPrimary,

    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: commonColor.fontFamilyBold
    }
};


/*
 * Load More Button Styles
 */
export const listLoadMoreButtonStyles = {
    reservationListWrapper: {
        height: 80,
        flexDirection: 'column',
        marginLeft: '5%',
        marginRight: '5%',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: commonColor.accordionBorderColors
    },
    plateTextStyle: {
        color: commonColor.brandPrimary,
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,

    },
    addressTextStyle: {
        color: commonColor.accordionBorderColors,
        fontSize: 14,
    },
    ammountTextStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 20
    },
    fuelLevelTextStyle: {
        color: commonColor.appGeneralFontColor
    }
};


/**
 * Warning Button
 */
export const warningLargeButtonStyles = {
    touchableStyles: {
        width: '100%',
        height: 60,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: commonColor.brandThird,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: commonColor.brandThird

    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: commonColor.fontFamilyBold
    }
};


export const modalActionButton = {
    touchableStyles: {
        borderWidth: 2,
        width: width * 0.37,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: width * 0.01,
        height: height * 0.05
    }
};