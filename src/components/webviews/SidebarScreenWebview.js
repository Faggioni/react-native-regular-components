import React, { Component } from "react";
import {
    View
} from 'react-native';
import { sidebarScreenWebviewStyles as styles } from './styles';
import { WebView } from 'react-native-webview';

class SidebarScreenWebview extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.registrationWebviewComponentWrapper }>
                <WebView
                    originWhitelist={['*']}
                    style={ this.styles.webviewStyle }
                    source={ { html: this.props.content } }
                />
            </View>
        );
    }
}
export default SidebarScreenWebview;
