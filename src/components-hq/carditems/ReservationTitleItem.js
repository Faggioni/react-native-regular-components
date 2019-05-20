import React, { Component } from 'react';
import {  Text } from 'react-native'
import { CardItem } from "native-base";
import { reservationTitleItemStyles as styles } from './styles';

class ReservationTitleItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <CardItem header bordered>
                <Text style={ this.styles.summaryTitle }>{ this.props.title }</Text>
            </CardItem>
        );
    }
}
export default ReservationTitleItem;