/**
 * Titles Styles
 */
import commonColor from '../../theme/variables/commonColor';

export const authTitleStyles = {
    titleStyle: {
        color: "#fff",
        flex: 1,
        alignSelf: "center",
        paddingTop: 20,
        paddingBottom: 20
    }
};

export const authNewAccountTitleStyles = {
    authNewAccountWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: '10%'
    },
    touchableStyle: {
        height: 20
    },
    textStyle: {
        color: '#fff',
        textAlign: 'center'
    }
};

export const reservationTitlesStyles = {
    titleWrapper:{
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    textStyle:{
        color: commonColor.appGeneralFontColor,
        fontSize: 18,
    },
    iconStyle:{
        color: commonColor.caagBlue,
        paddingRight: 10
    },
    buttonWrapper:{
        paddingRight: 20,
        flexDirection: 'row'
    },
    titleInnerWrapper: {
        paddingRight: 20
    }
};