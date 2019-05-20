import commonColor from '../../theme/variables/commonColor';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
/**
 * Steps Indicators Styles
 */

export const onRentalStepsIndicatorStyles = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize:35,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: commonColor.brandPrimary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: commonColor.brandPrimary,
    stepStrokeUnFinishedColor: commonColor.brandPrimary,
    separatorFinishedColor: commonColor.brandPrimary,
    separatorUnFinishedColor: "#ffffff",
    stepIndicatorFinishedColor: commonColor.brandPrimary,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: commonColor.brandPrimary,
    stepIndicatorLabelFontSize: 16,
    currentStepIndicatorLabelFontSize: 16,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: commonColor.brandPrimary,
    labelColor: commonColor.brandPrimary,
    labelSize: 13,
    labelAlign: 'flex-start',
    currentStepLabelColor: commonColor.brandPrimary,
};
export const onRentalStepsContentStyles = {
    stepContentTextStyle: {
        fontSize: 18,
        textAlign: 'justify',
        fontFamily: commonColor.fontFamily
    },
    stepContentWrapper:{
        paddingTop: 20,
        paddingBottom: 20
    },
    componentWrapper:{
        height: height * 0.28,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
