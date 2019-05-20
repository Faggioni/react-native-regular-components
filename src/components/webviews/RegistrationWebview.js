import React, { Component } from "react";
import {
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { registrationWebview as styles } from './styles';

class RegistrationWebview extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.registrationWebviewComponentWrapper }>
                <WebView
                    style={ this.styles.webviewStyle }
                    source={ this.props.source }
                    onNavigationStateChange={ this.props.onNavigationChange }
                    useWebKit={true}
                    allowUniversalAccessFromFileURLs={true}
                    allowsBackForwardNavigationGestures={true}
                    allowFileAccess={true}
                    scalesPageToFit={true}
                    originWhitelist={['*']}
                    startInLoadingState={true}
                />
            </View>
        );
    }
}
export default RegistrationWebview;
