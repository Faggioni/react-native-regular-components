/**
 * Fabs Components Styles
 */
import commonColor from '../../theme/variables/commonColor';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const centerLocationFabStyles = {
    fabStyle: {
        backgroundColor: '#fff'
    },
    containerStyle: {
        marginBottom: (height > 800) ? '25%' : '15%'
    },
    iconStyle:{
        color: commonColor.brandPrimary
    }
};
