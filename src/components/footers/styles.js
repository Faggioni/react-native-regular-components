/*
 * Footers Components Styles
 */
import commonColor from '../../theme/variables/commonColor';

export const mainScreenFooterStyles = {
    iconStyles:{
        color: commonColor.brandPrimary
    },
    iconReserveStyle:{
        color: commonColor.brandFifth
    },
    reserveTextStyle:{
        color: commonColor.brandFifth
    },
    iconOnRentalStyle:{
        color: commonColor.brandSixth
    },
    onRentalTextStyle:{
        color: commonColor.brandSixth
    },
    onWaitingForCompletionTextStyle: {
        color: commonColor.brandThird
    },
    footerWrapper:{
        flexDirection: "row",
        height: 55,
        borderWidth: 0,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: commonColor.generalBackground
    },
    textStyle:{
        fontFamily:commonColor.fontFamily
    }
};

