/**
 * Daily Manifest Accordion Header Style
 */
import commonColor from '../../theme/variables/commonColor';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');


export const dailyManifestHeader = {
    componentWrapper: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height * 0.05,
    },
    headerElementStyle:{
        color: commonColor.appGeneralFontColor,
        fontSize: 16,
    },
    tableItemStyle:{
        flex: 1,
        borderWidth: 1,
        borderCollapse:'separate',
        borderColor: commonColor.brandTableBorderColor,
        paddingLeft: 15,
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
};
