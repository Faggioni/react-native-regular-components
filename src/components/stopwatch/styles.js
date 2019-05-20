/**
 *  Stopwatch Styles
 */
import commonColor from '../../theme/variables/commonColor'
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get( 'window' );

export const reservationSummaryScreenStopwatchStyles = {
    componentWrapper: {
        height: height * 0.25,
    },
    componentInnerWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        verticalAlign: 'center',
    },
    titleStyle: {
        fontSize: 18,
        color: commonColor.brandSecondaryPalettePrimary,
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: commonColor.fontFamilyBold
    },
    titleWrapper: {
        flex: 1,
        margin: 15,
        height: height * 0.05,
    },
    timerWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',


    },
    timerStyle: {
        fontSize: 28,
        fontFamily: commonColor.fontFamilyBold,
        color: commonColor.brandPrimary,
        lineHeight: 32,
        textAlign: 'center',
//        paddingTop: 10
    }
};

/**
 * Reserve Vehicle On Map Stopwatch
 */
export const reserveVehicleOnMapStopwatchStyles = {
    stopwatchWrapperComponent: {
        width: width * 0.50,
        borderRadius: 5,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: ( height > 800 ) ? '15%' : '10%',
        paddingBottom: 20,
        alignSelf: 'center'
    },
    stopwatchInnerWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        verticalAlign: 'center'
    },
    stopwatchWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyles: {
        fontSize: 20,
        color: commonColor.brandPrimary,
        lineHeight: 28,
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: commonColor.fontFamilyBold
    },
    timeStyle: {
        fontSize: 20,
        color: commonColor.brandPrimary,
        lineHeight: 28,
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: commonColor.fontFamilyBold
    }
};

export const preserveVehicleScreenStopwatchStyles = {
    stopwatchWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: commonColor.brandPrimary,
    },
    stopwatchInnerWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        verticalAlign: 'center'
    },
    stopwatchContentWrapper: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 26,
        lineHeight: 32,
        color: commonColor.brandPrimary,
        textAlign: 'center',
        fontFamily: commonColor.fontFamilyBold
    },
    countdownStyle: {
        fontSize: 26,
        lineHeight: 32,
        color: commonColor.brandPrimary,
        textAlign: 'center',
        fontFamily: commonColor.fontFamilyBold
    }
};
