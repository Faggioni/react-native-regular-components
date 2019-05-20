/***
 *
 */
import commonColor from '../../theme/variables/commonColor';
import { Dimensions } from 'react-native';

const { height,  width } = Dimensions.get('window');

export const bigIconStyles = {
    iconWrapper: {
        flex:1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    iconStyles: {
        fontSize: height * 0.20,
        color: commonColor.brandPrimary
    }
};