/***
 * Images Preview Styles
 */
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import commonColor from '../../theme/variables/commonColor';

export const reservationImagePreviewStyles = {
    imagePreviewWrapper:{
        padding: 20
    },
    imagePreviewer: {
        height: (width < 400) ? 50 : 100,
        width: (width < 400) ? 0 : 100,
        borderRadius: (width < 400) ? 6 : 10,
    }
};


export const resevationThumbnailsStyles = {
    reservationThumbnailWrapper:{
        paddingBottom: 20,
        paddingTop: 20,
        flex: 1,
        flexDirection: 'row'
    },
    textStyle:{
        color: commonColor.appGeneralFontColor,
        fontSize: 16
    },
    buttonText:{
        color: '#fff'
    },
    uploadButton:{
        backgroundColor: commonColor.caagBlue
    },
    imageThumbnailStyles:{
        height: 70,
        width:70,
        borderRadius: 10
    },
    summaryItemWrapper:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 10,
        paddingTop: 10
    },
    contentStyle: {
        color: commonColor.appGeneralFontColor,
        textAlign: 'right',
        fontSize: 16
    },
    componentWrapper: {
        marginTop: 20,
        marginBottom: 20
    },
    thumbnailsWrapper: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    }
};

/**
 * Full Screen Image Preview Styles
 * @type {{}}
 */
export const fullScreenPreviewStyles = {
    componentWrapper: {
        flex: 1,
    },
    imageStyle: {
        flex: 1,
    },
    snapButtonWrapper: {
        position: 'absolute',
        right: '5%',
        bottom: '5%'
    },
    buttonText: {
        textAlign: 'center'
    },
    transparentBackButtonWrapper: {
        position: 'absolute',
        left: '5%',
        top: '5%',
        minHeight: '10%',
        zIndex: 1
    }
};