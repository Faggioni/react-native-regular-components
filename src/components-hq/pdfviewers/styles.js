/*
 * PDF Viewer Styles
 */
import {Dimensions} from "react-native";

export const pdfViewerStyles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex:1,
        width: Dimensions.get('window').width
    }
};