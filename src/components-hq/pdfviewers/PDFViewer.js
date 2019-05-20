import React,{ Component } from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';

/*
 * Styles
 */
import { pdfViewerStyles as styles } from "./styles";


/**
 * Custom Components
 */
import SearchSpinner from '../spinners/SearchSpinner';

class PDFViewer extends Component {
    constructor(props){ 
        super(props);
        this.styles = styles;
    }
    render() {
        return (
            <View style={ styles.container }>
                <Pdf
                    activityIndicator={<SearchSpinner />}
                    source={ this.props.src }
                    style={ this.styles.pdf }
                />
            </View>
        )
    }
}
export default PDFViewer;
