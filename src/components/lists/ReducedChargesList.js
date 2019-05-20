import React, { Component } from 'react';
import { List, View } from "native-base";
import { reducedChargeListItemStyles as styles} from './styles';

/**
 * Custom Components
 */
import ChargesListFooterItem from '../listitems/ChargesListFooterItem';
/*
 * Helpers
 */

import DataValidator from '../../modules/helpers/validations/DataValidator';

class ReducedChargesList extends Component{
    constructor(props){
        super(props);
        this.validator = new DataValidator();
        this.styles = styles;
    }
    showTotal(){
        return(
            <ChargesListFooterItem
                description={ 'Time Charges' }
                price={ this.props.rackRateDetails.total_price.amount_for_display }
            />
        );
    }
    render(){

        return(
            <List>
                { this.showTotal() }
            </List>
        );
    }
}
export default ReducedChargesList;