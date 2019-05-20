/***
 * Header Styles
 */
import commonColor from '../../theme/variables/commonColor';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

/**
 * Header Styles
 * @type {{headerStyles: {backgroundColor: string}, leftWrapperStyle: {flex: number}, bodyStyles: {flex: number, flexDirection: string, justifyContent: string}, titleStyle: {textAlign: string}}}
 */
export const headerStyles = {
    bodyStyles: {
        flex:4,
        flexDirection:'row',
        justifyContent: 'center'
    },
    headerStyles: {
        backgroundColor: commonColor.brandPrimary
    },
    titleStyle: {
        textAlign: 'left'
    },
    leftWrapperStyle: {
        flex: 1
    }
};

/**
 * Reservation Header
 * @type {{bodyComponentStyle: {flex: number, flexDirection: string, justifyContent: string}}}
 */
export const reservationScreenHeaderStyles = {
    bodyComponentStyle: {
        flex:4,
        flexDirection:'row',
        justifyContent:'center'
    }
};



export const manifestHeaderStyle = {
    componentWrapper: {
        flex: 1,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: "#EBF1F4",
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '5%'
    },
    headerTextStyles: {
        color: commonColor.appGeneralFontColor,
        fontSize: 20
    }
};