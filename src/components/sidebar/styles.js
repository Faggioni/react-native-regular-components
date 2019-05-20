const commonColor = require('../../theme/variables/commonColor');
export default {
    /*
     *  SideBarItem Styles
     */
    links:{
        borderColor: commonColor.sidebarIconsColors,
    },
    iconWrapper: {
        marginRight: 3
    },
    sidebarIconsStyle:{
        color: commonColor.sidebarIconsColors,
        width: '100%'
    },
    sidebarTextStyle:{
        lineHeight: 25,
        color: commonColor.brandPrimary,
    },
    
    /*
     *  SidebarTag Styles
     */
    sidebarTagTextStyle:{
        color: commonColor.sidebarIconsColors,
        textAlign: 'right'
    },
    sidebarTagWrapper:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 10
    }
};

/*
 *  SidebarTag Styles
 */
export const versionTagStyles = {
    sidebarTagTextStyle:{
        color: commonColor.sidebarIconsColors,
        textAlign: 'right',
        marginTop: '5%',
        marginRight: '5%',
        fontFamily: commonColor.fontFamily
    },
    sidebarTagWrapper:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 10
    }
};