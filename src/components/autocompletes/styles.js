/*
 * Autocompletes Styles
 */
import { Dimensions } from 'react-native';
import commonColor from '../../theme/variables/commonColor';


const { height, width } = Dimensions.get('window');

export const mapSearchAutocompleteStyles = {
    autocompleteWrapper:{
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
        backgroundColor:'#fff',
        marginTop: (height > 800) ? height * 0.08 : height * 0.05,
        marginRight: width * 0.05,
        marginLeft:  width * 0.05,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'transparent'
    },
    autocompleteContainerStyle:{
        flex:1,
        borderBottomColor: 'transparent',
    },
    inputContainerStyle:{
        flex:1,

        borderWidth: 0,
        borderBottomColor: 'transparent',
        borderColor: 'transparent'
    },
    listContainerStyles:{
        flex: 1,
        borderWidth: 0,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    listStyle:{
        flex: 1,
        marginLeft: '10%',
        marginRight: '5%',
        borderWidth: 0
    },
    iconStyle: {
        color:commonColor.brandPrimary,
        padding: 5
    },
    rightIconStyle:{
        color:commonColor.brandPrimary,
        paddingTop:5,
        paddingBottom: 5
    },
    itemWrapperStyle: {
        paddingLeft: '5%',
        paddingRight: '5%'
    }
};

export const autocompleteItemStyles = {
    buttonStyle:{
        marginBottom: 5,
        marginTop: 5,
        paddingBottom:5,
        paddingTop:5,
        paddingLeft: '2%',
        paddingRight: '2%',
        flex:1,
        flexDirection: 'row'
    },
    labelStyle:{
        color: commonColor.appGeneralFontColor,
        fontFamily: commonColor.fontFamily
    }
};
