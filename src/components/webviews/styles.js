/*
 * Registration Webview Styles
 */
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const commonsStyles = {
    webviewComponentWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    webviewStyle: {
        flex:1,
        height: height * 0.8,
        width: width
    }
};

export const registrationWebview = {
    registrationWebviewComponentWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    webviewStyle: {
        flex:1,
        height: height * 0.8,
        width: width
    }
};

/**
 * SidebarScreenWebview
 */
export const sidebarScreenWebviewStyles = {
    registrationWebviewComponentWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    webviewStyle: {
        height: height * 0.8,
        width: width * 0.90
    }
};
