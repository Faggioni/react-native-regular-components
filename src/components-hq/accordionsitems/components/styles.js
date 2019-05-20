import commonColor from "../../../theme/variables/commonColor";


export const textStyles = {
    textWrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 5,
    },
    itemTextStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 16
    }
};
export const textDynamicStyles = {
    textWrapper:{
        flex:1,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemTextStyle: {
        color: commonColor.caagBlue,
        fontSize: 16
    }
};