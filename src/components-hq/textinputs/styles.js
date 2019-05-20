/**
 * Text inputs Styles
 */
import commonColor from '../../theme/variables/commonColor';


export const textInputStyles = {
    componentWrapper:{
        height:50,
        paddingTop: 10,
        paddingBottom: 10
    },
    labelWrapper:{
        paddingBottom: 5
    },
    textInputStyle:{
        color: commonColor.appGeneralFontColor,
        borderColor: commonColor.caagInputsBorderColor,
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        height: 30

    },
    labelStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 16
    },
};

export const textInputModalStyles = {
    componentWrapper:{
        paddingTop: 10,
        paddingBottom: 10,
    },
    textInputStyle:{
        color: commonColor.appGeneralFontColor,
        borderColor: commonColor.caagInputsBorderColor,
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        paddingTop: 20,
        height: 30,
        width: 30
    },
    labelStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 20
    },
    labelWrapper:{
        paddingBottom: 5
    }
};