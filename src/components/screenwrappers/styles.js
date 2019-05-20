/***
 *
 */
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const fullScreenFixedStyles = {
    componentStyle: {
        height: height,
        width: width
    }
};