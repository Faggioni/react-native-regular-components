/*
 * Vehicle Modal Styles
 */
import commonColor from '../../../theme/variables/commonColor';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const vehicleModalStyles = {
    vehicleModalWrapper: {
        backgroundColor: "#fff",
        height: '45%',
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    }
};
/*
 * Image Row Styles
 */
export const imageRowStyles = {
    imageRowWrapper: {
        flex: 1,
        justifyContent: 'center',
        flexDirection:'row',
        marginRight: width * 0.10,
        marginLeft:  width * 0.10
    },
    imageStyles: {
        width: width * 0.8,
        height: height * 0.25,
        position: 'absolute',
        bottom: 0,
        marginBottom: -30
    }
};
/*
 * Description Row Styles
 */
export const descriptionRowStyles = {
    descriptionRowWrapper: {
        flexDirection: 'row',
        paddingTop: (width < 361) ? 0 : 20,
        paddingBottom: 20,
        marginRight: '10%',
        height:undefined,
        width:undefined,
        backgroundColor: 'white'
    },
    distanceToCarWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    iconWrapper: {
        flex:2,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconStyles: {
        color:commonColor.brandPrimary,
    },
    descriptionWrapper: {
        flex: 6
    },
    descriptionMainTextStyles:{
        color: commonColor.appGeneralFontColor,
        fontSize: 20,
    },
    descriptionMainContentTextStyles:{
        color: commonColor.appGeneralFontColor,
        fontSize: 20,
        textAlign: 'right'
    },
    descriptionTextStyles:{
        color: commonColor.accordionBorderColors,
        fontSize: (width < 361) ? 12 : 14,
    },
    descriptionContentTextStyles:{
        color: commonColor.accordionBorderColors,
        fontSize: (width < 361) ? 12 : 15,
        textAlign: 'right'
    },
    descriptionContentWrapper: {
        flex:4,
        justifyContent: 'flex-end'
    },
    gasTagWrapper: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
};

/*
 * Address Row Styles
 */
export const addressRowStyles = {
    descriptionRowWrapper: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        marginRight: '10%'
    },
    iconWrapper: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyles: {
        color:commonColor.brandPrimary
    },
    descriptionWrapper: {
        flex: 8,
    },
    descriptionMainTextStyles:{
        color: commonColor.appGeneralFontColor,
        fontSize: (width < 361) ? 14 : 18,
    },
    descriptionMainContentTextStyles:{
        color: commonColor.appGeneralFontColor,
        fontSize: (width < 361) ? 14 : 18,
        textAlign: 'right'
    },
    descriptionTextStyles:{
        color: commonColor.accordionBorderColors,
        fontSize: (width < 361) ? 12 : 15
    },
    descriptionContentTextStyles:{
        color: commonColor.accordionBorderColors,
        fontSize: (width < 361) ? 12 : 15,
        textAlign: 'right'
    },
    descriptionContentWrapper: {
        flex:4,
        justifyContent: 'flex-end'
    },
    goToCarIcon:{
        color: commonColor.brandPrimary
    }
};

/*
 * ButtonsRow Styles
 */
export const buttonsRowStyles = {
    buttonRowWrapper: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginRight: '10%',
    }
};

/*
 * Reserve Button Styles
 */
export const reserveButton = {
    touchableStyles: {
        borderWidth: 2,
        borderColor: commonColor.brandPrimary,
        backgroundColor: commonColor.brandPrimary,
        width: width * 0.37,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: width * 0.01,
        height: height * 0.05
    },
    buttonTextStyle:{
        color: '#fff',
    }
};

/*
 * Start Button Styles
 */
export const startButton = {
    touchableStyles: {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.37,
        borderRadius: width * 0.01,
        height: height * 0.05,
    },
    buttonTextStyle:{
        color: commonColor.brandPrimary,
        textAlign: 'center'
    }
};


/*
 * Rate Row Styles
 */
export const rateRowStyles = {
    descriptionRowWrapper: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        marginRight: '10%'
    },
    iconWrapper: {
        flex:1.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyles: {
        color:commonColor.brandPrimary
    },
    descriptionWrapper: {
        flex: 6,
    },
    rateTagStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    descriptionMainTextStyles:{
        color: commonColor.appGeneralFontColor,
        fontSize: (width < 361) ? 14 : 18,
    },
    descriptionMainContentTextStyles:{
        color: commonColor.appGeneralFontColor,
        fontSize: (width < 361) ? 14 : 18,
        textAlign: 'right'
    },
    descriptionTextStyles:{
        color: commonColor.accordionBorderColors,
        fontSize: (width < 361) ? 12 : 15,
    },
    descriptionContentTextStyles:{
        color: commonColor.accordionBorderColors,
        fontSize: (width < 361) ? 12 : 15,
        textAlign: 'right'
    },
    descriptionContentWrapper: {
        flex:4,
        justifyContent: 'flex-end',
    },
};