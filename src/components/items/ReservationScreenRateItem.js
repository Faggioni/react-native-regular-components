import React, { Component } from 'react';
import { reservationRateItem as styles } from './styles';
import { HQPricingCard } from 'react-native-hq-components';

class ReservationScreenRateItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            buttonConfig:{
                title: '',
                icon: ''
            }
        }
    }
    componentWillMount(){
        this.setState({
            buttonConfig:{
                title: this.props.buttonTitle,
                icon: this.props.buttonIcon
            }
        });
    }
    render(){
        return(
            <HQPricingCard
                wrapperStyle={ {} }
                containerStyle={ { borderRadius: 5 } }
                pricingStyle={ this.styles.pricingStyle }
                infoStyle={ this.styles.infoStyles }
                pricingFont= { this.styles.pricingFont }
                titleFont={ this.styles.pricingFont }
                color={ this.styles.pricingButtonColor }
                price={ this.props.price }
                info={ this.props.info }
            />
        );
    }
}
export default ReservationScreenRateItem;