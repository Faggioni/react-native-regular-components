import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native'

/**
 * Helpers
 */
import PdfUrlHelper from '../../modules/helpers/urls/PdfUrlHelper';

class PDFViewerWebview extends Component{
    constructor(props){
        super(props);
        //this.styles = styles;
        this.googleFormatter = new PdfUrlHelper();
    }
    render(){
        return(
            <View style={{ flex:1 }}>
                <WebView
                    source={ { uri: this.googleFormatter.getGoogleViewerUrl(this.props.source) } }
                />
            </View>

        );
    }
}
export default PDFViewerWebview;