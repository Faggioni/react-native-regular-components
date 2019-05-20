import { Dimensions } from 'react-native';
let { width, height } = Dimensions.get('window');
import commonColor from '../../../theme/variables/commonColor';

export const loginModalStyles = {
    modalStyles:{
        flex:1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    loginScreenWrapper:{
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: "rgba(0, 0, 0, 0.1)",
        height: height * 0.35,
        alignSelf: 'center',
        width: width * 0.7,
        marginTop: height * 0.15,
        paddingTop: '5%'
    },
    formWrapper: {
        backgroundColor: '#fff',
        width: '100%'
    },
    formInnerWrapper: {
    },
    spaceWrapperStyleTop:{

    },
    loginRowWrapperStyle:{
        marginLeft: '10%',
        marginRight: '10%'
    },
    spaceWrapperStyleBottom:{

    },
    headerTextStyle: {
        lineHeight: 20,
        color: commonColor.appFontColorDarker,
        textAlign: 'center'
    }
};