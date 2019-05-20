/***
 *
 */
import commonColor from '../../theme/variables/commonColor';

export const pricingBoxStyles = {
    componentWrapper: {
        flexDirection: 'column',
        borderColor: commonColor.caagInputsBorderColor,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRadius: 5,
        shadowColor: commonColor.caagInputsBorderColor,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 2,
        padding: 5
    },
    titleStyles: {
        fontSize: 24,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily:  commonColor.fontFamilyBold,
        color: commonColor.brandSecondaryPalettePrimary,
        textAlign: 'center'
    }
};