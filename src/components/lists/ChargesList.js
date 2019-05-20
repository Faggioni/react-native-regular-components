import React, { Component } from 'react';
import { List } from "native-base";
import { chargeListItemStyles as styles} from './styles';

/**
 * Custom Components
 */
import ChargesListHeaderItem from '../listitems/ChargesListHeaderItem';
import ChargesListItem from '../listitems/ChargesListItem';
import ChargesListFooterItem from '../listitems/ChargesListFooterItem';
/*
 * Helpers
 */
import RatesCalculator from '../../modules/helpers/rates/RatesCalculator';
import RatesStringFormmater from '../../modules/helpers/formatting/RatesStringFormmater';
import DataValidator from '../../modules/helpers/validations/DataValidator';

class ChargesList extends Component{
    constructor(props){
        super(props);
        this.calculator = new RatesCalculator();
        this.formmatter = new RatesStringFormmater();
        this.validator = new DataValidator();
        this.styles = styles;
    }
    showMinuteRate(){
        if((! this.validator.isEmpty(this.props.rackRateDetails)) && this.props.rackRateDetails.minutes > 0  ){
            return <ChargesListItem
                        description={ this.formmatter.getMinuteRateFormatted(this.props.rackRateDetails) }
                        price={ this.calculator.getMinuteAmmount( this.props.rackRateDetails ) }
                    />;
        }
    }
    showHourRate(){
        if((! this.validator.isEmpty(this.props.rackRateDetails)) && this.props.rackRateDetails.hours > 0){
            return <ChargesListItem
                description={ this.formmatter.getHourRateFormatted(this.props.rackRateDetails) }
                price={ this.calculator.getHourAmmount( this.props.rackRateDetails ) }
            />;
        }
    }
    showDayRate(){
        if((! this.validator.isEmpty(this.props.rackRateDetails)) && this.props.rackRateDetails.days > 0 ){
            return <ChargesListItem
                description={ this.formmatter.getDayRateFormatted(this.props.rackRateDetails) }
                price={ this.calculator.getDayAmmount( this.props.rackRateDetails ) }
            />;
        }
    }
    showWeekRate(){
        if((! this.validator.isEmpty(this.props.rackRateDetails)) && this.props.rackRateDetails.weeks > 0 ){
            return <ChargesListItem
                description={ this.formmatter.getWeekRateFormatted(this.props.rackRateDetails) }
                price={ this.calculator.getWeekAmmount( this.props.rackRateDetails ) }
            />;
        }
    }
    showMonthRate(){
        if((! this.validator.isEmpty(this.props.rackRateDetails)) && this.props.rackRateDetails.months > 0){
            return <ChargesListItem
                description={ this.formmatter.getMonthRateFormatted(this.props.rackRateDetails) }
                price={ this.calculator.getMonthAmmount( this.props.rackRateDetails ) }
            />;
        }
    }
    showMiscelaneousCharges(){
        let counter = 0;
        if(! this.validator.isEmpty(this.props.miscelaneousDetails) ){
            return this.props.miscelaneousDetails.map( (charge) => {
                return ( <ChargesListItem
                    key={ counter++ }
                    description={ charge.name }
                    price={ charge.amount.amount_for_display }
                />);
            } );
        }
    }
    showTotal(){
        if((! this.validator.isEmpty(this.props.miscelaneousDetails)) && (! this.validator.isEmpty(this.props.rackRateDetails))){
            return(
                <ChargesListFooterItem
                    description={ 'Total' }
                    price={ this.formmatter.getTotalFormatted(this.calculator.getReservationTotal(this.props.rackRateDetails, this.props.miscelaneousDetails)) }
                />
            );
        }
    }
    render(){
        return(
            <List>
                <ChargesListHeaderItem
                    headerText="Time Charges"
                />
                { this.showMinuteRate() }
                { this.showHourRate() }
                { this.showDayRate() }
                { this.showWeekRate() }
                { this.showMonthRate() }
                <ChargesListHeaderItem
                    headerText="Miscellaneous"
                />
                { this.showMiscelaneousCharges() }
                { this.showTotal() }
            </List>
        );
    }
}
export default ChargesList;