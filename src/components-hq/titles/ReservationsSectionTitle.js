import React, { Component } from "react";
import {
    View,
    Text,
    Icon
} from 'native-base';
import StatusButton from '../buttons/StatusButton';
import { reservationTitlesStyles as styles } from './styles';

class ReservationsSectionTitle extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.titleWrapper }>
                <View style={this.styles.titleInnerWrapper}>
                    <StatusButton
                        status={ this.props.status }
                    />
                </View>
                <View style={ this.styles.buttonWrapper }>
                    <Icon
                        name={ this.props.iconName }
                        type={ this.props.iconType }
                        style={ this.styles.iconStyle }
                        fontSize={ 20 }
                    />
                    <View>
                        <Text style={ this.styles.textStyle } >{ this.props.title }</Text>
                    </View>

                </View>

            </View>
        );
    }
}
export default ReservationsSectionTitle;