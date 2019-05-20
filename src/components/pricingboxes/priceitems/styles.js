/***
 * PriceItems Styles
 * @type {{textStyle: {color: string, paddingBottom: number, paddingTop: number, textAlign: string}}}
 */
import commonColor from '../../../theme/variables/commonColor';


export const priceItemStyles = {
    componentWrapper: {
        flexDirection: 'column',
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
    },
    textPricingStyles: {
        color: commonColor.brandPrimary,
        fontFamily: commonColor.fontFamilyBold,
        fontSize: 18,
        paddingBottom: 2,
        paddingTop: 2,
        textAlign: 'center'
    },
    textTagStyles:{
        color: commonColor.brandSecondaryPalettePrimary,
        fontFamily: commonColor.fontFamilyBold,
        fontSize: 14,
        textAlign: 'center'
    }
};