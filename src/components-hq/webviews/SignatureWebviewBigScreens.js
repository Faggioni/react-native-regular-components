import React, { Component } from 'react';
import { WebView } from 'react-native'
import { signatureWebviewStyles as styles } from './styles';

class SignatureWebviewBigScreens extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <WebView
                style={ this.styles.signatureWebviewStyles }
                source={ { uri: this.props.source } }
                onNavigationStateChange={ this.props.onNavigationChange }
                scrollEnabled={ true }
                bounces={ false }
            />
        );
    }
}
export default SignatureWebviewBigScreens;