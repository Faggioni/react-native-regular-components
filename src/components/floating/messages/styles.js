import commonColor from '../../../theme/variables/commonColor';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

/**
 * Reserve Vehicle On Map Stopwatch
 */
export const floatingMapMessagesStyles = {
    stopwatchWrapperComponent: {
        width: width * 0.50,
        borderRadius:5,
        backgroundColor:"#fff",
        position: 'absolute',
        bottom: (height > 800) ? '15%' : '10%',
        paddingBottom:20,
        alignSelf: 'center'
    },
    stopwatchInnerWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        verticalAlign: 'center'
    },
    stopwatchWrapper: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center'
    },
    textStyles: {
        fontSize: 20,
        color: commonColor.brandPrimary,
        lineHeight:28,
        textAlign: 'center',
        paddingTop:10,
        fontFamily: commonColor.fontFamilyBold
    },
    timeStyle: {
        fontSize: 20,
        color: '#fff',
        lineHeight:28,
        textAlign: 'center',
        paddingTop:10
    }
};