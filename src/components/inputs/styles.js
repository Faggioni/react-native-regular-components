/*
 * Inputs Components Styles
 */
import commonColor from '../../theme/variables/commonColor';


/*
 * General Use Input Component Styles
 */
export const generalUseInputStyles = {
    placeholderStyle: '#cecece',
    inputStyles:{
        flex:1,
        color:"#ccc",
        borderBottomWidth: 0,
        fontFamily: commonColor.fontFamily
    }
};

/*
 * Search Bar
 */
export const searchBarInputStyles = {
    placeholderStyle: '#cecece',
    inputStyles:{
        flex:1,
        color:"#ccc",
        borderBottomWidth: 0,
        fontFamily: commonColor.fontFamily
    }
};

/*
 * Footer Main Screen Input Component Styles
 */
export const footerMainScreenInputStyles = {
    inputStyles:{
        flex:1,
        color:"#ccc"
    },
    footerMainScreenWrapper: {
        marginRight: '10%',
        marginLeft: '10%'
    },
    footerMainScreenInnerWrapper: {
        flexDirection: 'row'
    },
    footerIconWrapper: {
        justifyContent: 'center'
    },
    footerMainScreenStyles:{
        color: commonColor.brandPrimary
    }
};

export const modalLoginInputStyles = {
    placeholderStyle: '#cecece',
    inputStyles:{
        flex:1,
        color:commonColor.appFontColorDarker,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: commonColor.fontFamily
    },
    itemWrapperStyle: {
        borderBottomWidth: 0
    },
    showPasswordButtonStyle: {
        position: 'absolute',
        right: 5,
        zIndex: 2
    }
};


