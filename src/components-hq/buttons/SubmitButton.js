import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    Button
} from 'native-base';
import styles from './styles';

class SubmitButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.buttonReservationPickupStyle }>
                <Button style={ this.styles.buttonReservationPickupStyle } title={ this.props.title } rounded block onPress={ this.props.onPress }>
                    <Text style={ this.styles.buttonTextReservationPickupStyle }>{ this.props.buttonText }</Text>
                </Button>
            </View>
        );
    }

}
export default SubmitButton;

