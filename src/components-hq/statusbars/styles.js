import {Platform} from "react-native";

/**
 * Status Bar Styles
 */
import commonColor from '../../theme/variables/commonColor';


export const authStatusBarStyles = {
    statusBarStyles: Platform.OS === "android" ? commonColor.hqYellow : "transparent"
};
export const generalStatusBarStyles = {
    statusBarStyles: Platform.OS === "android" ? commonColor.caagBlue : "transparent"
};