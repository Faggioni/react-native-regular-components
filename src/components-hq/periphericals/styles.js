/**
 * Peripherical Components Styles
 * @type {{container: {flex: number, flexDirection: string, backgroundColor: string}, preview: {flex: number, justifyContent: string, alignItems: string}, capture: {flex: number, backgroundColor: string, borderRadius: number, padding: number, paddingHorizontal: number, alignSelf: string, margin: number}}}
 */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const cameraStyles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        width: width,
        height: height
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    buttonBarWrapper: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: '2%',
        alignItems: 'center',
        width: '100%'
    }
};