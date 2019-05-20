import { Platform } from "react-native";
/*@todo Check this Require Statement*/

import commonColor from '../../theme/variables/commonColor';


export const reservationListItemStyles = {
    containerImage: {
        flex: 1,
        width: null,
        height: null
    },
    name: {
        color: "red"
    },
    text: {
        marginBottom: 10,
        fontSize: 18
    },
    listitem: {
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5
    },
    formErrorGeneralText: {
        fontSize: Platform.OS === "android" ? 12 : 15,
        color: '#3FC380',
        textAlign: "right",
        top: -10,
        flex: 1,
        alignSelf: "center",
        paddingTop: 20
    },
    itemWrapper: {
        flex:1,
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom: 10,
        marginLeft: '5%',
        marginRight: '5%'
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        color: commonColor.appGeneralFontColor
    },
    completedButtonStyle:{
        backgroundColor: "#4272A8"
    },
    openButtonStyle:{
        backgroundColor: "#F0AD4E"
    },
    quoteButtonStyle:{
        backgroundColor: "#777777"
    },
    rentalButtonStyle:{
        backgroundColor: "#50CC99"
    },
    buttonsTextStyle:{
        color:"#fff"
    }

};
