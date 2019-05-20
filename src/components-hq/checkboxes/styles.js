/**
 * Reservation Checkbox styles
 */
import commonColor from '../../theme/variables/commonColor';

export const reservationCheckboxStyles = {
    checkboxColor: commonColor.caagBlue,
    checkboxStyle:{
        borderRadius: 10
    },
    componentWrapper:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingBottom: 10
    },
    labelWrapper:{
        paddingLeft: 20
    },
    labelStyle:{
        color: commonColor.appGeneralFontColor,
        fontSize: 16,
    }
};