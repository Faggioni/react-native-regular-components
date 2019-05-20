/*
 * Accordions Components Styles
 */
import commonColor from '../../theme/variables/commonColor';

export const accordionStyles = {
    iconColor: commonColor.brandPrimary,
    expandedIconColor: commonColor.brandPrimary,
    expandedIconStyle: {
        color: commonColor.brandPrimary
    },
    iconStyle:{
        color: commonColor.brandPrimary
    },
    headerStyle:{
        backgroundColor: commonColor.brandPrimary,
        color: '#fff'
    },
    titleStyle:{
        backgroundColor:"#E0F3FF",
        color: commonColor.brandPrimary
    },
    contentStyle:{
        backgroundColor: "#fff",
        color: commonColor.appGeneralFontColor
    },
    contentWrapper: {
        padding: 10
    },
    contentWrapperExpanded: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: commonColor.accordionBorderColors
    },
    contentTextStyle: {
        color: commonColor.appGeneralFontColor,
        padding: 10,
        textAlign: 'justify'
    },
    componentWrapper: {
        flex: 1,
        borderWidth: 0,
    },
    headerWrapper: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
        margin: 2,
        borderBottomWidth: 1,
        borderBottomColor: commonColor.accordionBorderColors
    },
    headerWrapperExpanded: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-between",
        alignItems: "center",
        margin: 2
    },
    headerTextWrapper: {
        flex: 8
    },
    headerTextStyles: {
        textAlign: 'left',
        color: commonColor.appGeneralFontColor,
        padding: 10
    },
    headerIconWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerIconStyles: {
        color:commonColor.brandPrimary
    }
};
