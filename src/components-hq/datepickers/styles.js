/***
 * Datepickers Styles
 */
import commonColor from '../../theme/variables/commonColor';

export const reservationDatepickerStyles = {
    inputWrapper:{
        paddingTop: 5,
        paddingBottom: 5
    },
    pickerWrapper:{
        flex: 1,
        borderWidth: 1,
        borderColor: commonColor.caagInputsBorderColor,
        borderRadius: 5
    },
    labelWrapper:{
        paddingBottom: 5
    },
    labelStyle: {
        color: commonColor.appGeneralFontColor,
        fontSize: 16
    },
    datePickerCustomStyle:{
        dateInput:{
            borderWidth: 0
        },
        placeholderText: {
            textAlign: 'left',
            paddingLeft: 10,
            color: commonColor.appGeneralFontColor
        },
        disabled:{

        },
        dateTouchBody:{

        },
        dateIcon: {

        },
        dateText:{
            textAlign: 'left',
            paddingLeft: 10,
            color: commonColor.appGeneralFontColor
        }
    }
};
