

import { Dimensions } from 'react-native';

import commonColor from "../../theme/variables/commonColor";
const { width, height } = Dimensions.get('window');

export const reservationOverviewBrandItem = {
    dateTimeTitleWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: 15
    },
    cardTitle: {
        textAlign: 'left',
        fontSize: 20,
        color: commonColor.appGeneralFontColor
    },
    dateInformationWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    dateInformationRow: {
        flex: 1,
        flexDirection: 'column'
    },
    blueText: {
        color: commonColor.appGeneralFontColor
    }
};


export const reservationDateInformationItem = {
    dateTimeTitleWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: 15
    },
    cardTitle: {
        textAlign: 'left',
        fontSize: 20,
        color: commonColor.appGeneralFontColor
    },
    dateInformationWrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    dateInformationFormat: {
        flex: 1,
        flexDirection: 'row'
    },
    blueText: {
        color: commonColor.appGeneralFontColor
    },
};

export const reservationTitleItemStyles = {
    summaryTitle: {
        fontSize: 16,
        color: commonColor.appGeneralFontColor
    },
};


export const reservationVehicleImageStyle = {
    classImageWrapper: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    vehicleImageStyles: ( width < 400 ) ? {
        height: 200,
        width: 200,
        flex: 1
    } :  ((401 < this.height) && (this.height < 850) ? {
        height: 300,
        width: 300,
        flex: 1
    } : {
        height: 400,
        width: 400,
        flex: 1
    })

};

export const reservationPriceItemStyle = {
    featuresWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    featuresRows: {
        flex: 1,
    },
    textStyles: {
        color: commonColor.appGeneralFontColor,
        textAlign: 'right'
    }
};