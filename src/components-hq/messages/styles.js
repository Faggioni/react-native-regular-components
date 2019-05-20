/*
 * Messages Components Styles
 */
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

import commonColor from '../../theme/variables/commonColor';

export const emptyListMessageStyles = {
    messageWrapper: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: '10%',
        height: height
    },
    fontStyle: {
        color: commonColor.regularText,
        textAlign: 'center'
    }
};

export const noVehiclesMessageStyles = {
    regularText: {
        color: commonColor.appGeneralFontColor
    },
    componentWrapper: {
        paddingBottom: 20
    }
};