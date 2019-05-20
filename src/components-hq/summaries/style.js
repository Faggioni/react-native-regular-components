/*
 * Summaries Styles
 */

import commonColor from "../../theme/variables/commonColor";

export const reservationSummaryStyles = {
    finalPrice: {
        flex: 1,
        textAlign: 'right',
        fontSize: 20,
        color: commonColor.appGeneralFontColor
    },
    priceHelperText: {
        textAlign: 'right'
    },
    priceWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    priceInformationWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    summaryTitle: {
        fontSize: 20,
        color: commonColor.appGeneralFontColor,
        paddingTop: 20
    },
    priceSubtitleWrapper: {
        flex: 1,
        alignItems: 'flex-start'
    },
    totalPriceWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    insuranceTextWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    insuranceTextRight: {
        flex: 1,
        textAlign: 'right',
        color: commonColor.appGeneralFontColor,
        lineHeight: 20
    },
    finalPriceWrapper: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
    insuranceTextLeft: {
        flex: 1,
        textAlign: 'left',
        color: commonColor.appGeneralFontColor
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 36,
        color: commonColor.appGeneralFontColor
    },
    subtitleStyle: {
        flex: 1,
        alignItems: 'flex-start'
    },
    insuranceItemWrapper: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },
};

export const pickupSummaryStyles = {
    contentStyle: {
        backgroundColor: '#E0E0E0',
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight:10,
        paddingTop:5
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: commonColor.appGeneralFontColor
    },
    cardStyle: {
        paddingLeft: 20,
        paddingRight:20,
        paddingTop: 20,
        paddingBottom: 30,
        borderRadius: 5
    },
    dateTimeTitleWrapper: {
        flex:1,
        alignItems: 'center'
    }
};