import React, { Component } from "react";
import {
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { commonsStyles as styles } from './styles';

class ReservationPaymentWebview extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.webviewComponentWrapper }>
                <WebView
                    style={ this.styles.webviewStyle }
                    source={ this.props.source }
                    onNavigationStateChange={ this.props.onNavigationChange }
                    useWebKit={false}
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
export default ReservationPaymentWebview;
