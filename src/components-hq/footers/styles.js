/*
 * Footer Components Styles
 */
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
import commonColor from '../../theme/variables/commonColor'

export const footerNavStyles = {
    footerWrapper: {
        width: width,
        flexDirection: "row",
        height: 55,
        borderWidth: 0,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: commonColor.brandPrimary
    },
    footerItemTextStyle:{
        fontSize: width <= 340 ? 12 : null,
        color: '#fff'
    },
    iconsStyle:{
        color: '#fff'
    }
};
