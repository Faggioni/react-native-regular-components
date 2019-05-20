import React, { Component } from 'react';
import {
    View,
    CheckBox,
    Text
} from 'native-base';
import { reservationCheckboxStyles as styles } from './styles';
class ReservationCheckbox extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <View>
                    <CheckBox
                        style={ this.styles.checkboxStyle }
                        checked={ this.props.checked }
                        color={ this.styles.checkboxColor }
                        onPress={ this.props.onPress }
                    />
                </View>
                <View style={ this.styles.labelWrapper }>
                    <Text style={ this.styles.labelStyle }>{ this.props.label }</Text>
                </View>
                
            </View>
        );
    }
}
export default ReservationCheckbox;
