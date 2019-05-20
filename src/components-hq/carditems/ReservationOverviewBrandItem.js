import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Body, CardItem, Left } from "native-base";
import { reservationOverviewBrandItem as styles } from './styles';

class ReservationOverviewBrandItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <CardItem>
                <Left>
                    <Body style={ { marginLeft: 0 } }>
                    <View style={ this.styles.dateTimeTitleWrapper }>
                        <Text style={ this.styles.cardTitle }>Brand</Text>
                    </View>
                    <View style={ this.styles.dateInformationWrapper }>
                        <View style={ this.styles.dateInformationFormat }>
                            <View style={ this.styles.dateInformationRow }>
                                <Text style={ this.styles.blueText } note>{ this.props.brandName }</Text>
                            </View>
                        </View>
                    </View>
                    </Body>
                </Left>
            </CardItem>
        );
    }
}
export default ReservationOverviewBrandItem;