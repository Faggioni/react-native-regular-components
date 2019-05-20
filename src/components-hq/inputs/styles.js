/**
 * Inputs Styles
 */
import commonColor from '../../theme/variables/commonColor';

export const authInputStyles = {
    placeholderColor: "#fff",
    inputStyle: {
        paddingLeft: 10,
        color: "#fff",
        borderColor: '#fff'
    },
    iconStyles: {
        color: "#fff"
    },
    underlineColor: 'transparent',
    inputGrp:{
        borderColor: '#fff',
        flex: 1
    }
};


export const reservationInputStyles = {
    placeholderColor: commonColor.brandTableBorderColor,
    inputStyle: {
        paddingLeft: 10,
        color: commonColor.appGeneralFontColor,
        borderColor: '#fff'
    },
    input:{
        width: '100%',
        borderColor: commonColor.appGeneralFontColor,
        borderRadius: 5,
        borderWidth: 1,
        color: commonColor.appGeneralFontColor
    },
    underlineColor: 'transparent',
    inputGrp:{
        borderColor: '#fff',
    },
    labelStyles:{
        marginTop: 5,
        marginBottom: 5,
        color: commonColor.appGeneralFontColor,
        fontSize: 15
    },
    inputGroupInnerWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingBottom: 15
    }
};