/*
 * Camera Buttons Styles
 */
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export const takeAPictureStyles = {
    wrapperStyle: {
        zIndex:1,
        width: width / 6,
        height: width / 6,
        borderRadius: width / 12,
        backgroundColor: '#fff',
        opacity: 0.50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle:{
        zIndex:2,
        width: width / 8,
        height: width / 8,
        borderRadius: width / 16,
        backgroundColor: '#fff',
        position: 'absolute',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1
    }
};

export const flashButtonStyles = {
    wrapperStyle:{
        zIndex:2,
        width: width / 10,
        height: width / 10,
        borderRadius: width / 20,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconColor:{
        color: '#fff',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export const changeCameraStyles = {
    wrapperStyle:{
        zIndex:2,
        width: width / 10,
        height: width / 10,
        borderRadius: width / 20,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconColor:{
        color: '#fff',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }
};