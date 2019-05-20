/*
 * Header Components Styles
 */

const commonColor = require('../../theme/variables/commonColor');
import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
/*
 * Main Screen Header Styles
 */
export const mainScreenHeaderStyles = {
    mainHeaderIconStyle:{
        color: commonColor.sidebarIconsColors
    }
};

/*
 * General Screen Header Styles
 */
export const generalScreenHeaderStyles = {
    titleStyle: {
        color: commonColor.sidebarIconsColors,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: commonColor.fontFamilyBold
    },
    backButtonIconStyle:{
        color: commonColor.sidebarIconsColors
    },
    leftSideStyle:{
        flex:1
    },
    bodySideStyle: {
        flex:6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightSideStyle: {
        flex:1
    }
};

/*
 * Webview Header Styles
 */
export const webviewHeaderStyles = {
    titleStyle: {
        color: '#fff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: commonColor.fontFamilyBold
    },
    backButtonIconStyle:{
        color: '#fff',
    },
    leftSideStyle:{
        flex:1
    },
    bodySideStyle: {
        flex:6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightSideStyle: {
        flex:1
    },
    headerStyle:{
        backgroundColor: commonColor.brandPrimary
    }
};
