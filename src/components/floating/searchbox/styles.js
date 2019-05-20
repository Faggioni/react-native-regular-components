/*
 * Search Boxes Styles
 */

export const homeConsoleStyles = {
    homeControlWrapper: {
        flex:1,
        flexDirection: 'row',
        marginRight:'10%',
        marginLeft: '10%' ,
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: '8%',
        borderRadius: 10,
        shadowColor: '#ccc',
        shadowOffset:{  width: 30,  height: 30,  },
        shadowOpacity: 0.5,
        elevation: 1
    },
    homeControlInnerWrapper: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: "#fff",
        padding: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset:{  width: 2,  height: 2 },
        shadowOpacity: 0.25
    },
    buttonWrapper: {
        flex:1,
        flexDirection: 'row'
    }
};
