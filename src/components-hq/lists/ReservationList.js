import React, { Component } from 'react';
import { FlatList } from 'react-native'
import { Item } from 'native-base';
import ReservationsItem from "../listitems/ReservationListItem";
import DataValidator from '../../modules/helpers/validation/DataValidator';
import EmptyListMessage from "../messages/EmptyListMessage";

class ReservationList extends Component{
    constructor(props){
        super(props);
        this.validator = new DataValidator();
    }
    componentWillMount(){
    }
    renderReservationListItem({ item }){
        if(! this.validator.isEmpty(item) ){
            return (
                <Item>
                    <ReservationsItem
                        key={ item.id }
                        reservation={ item }
                        onPressReservation={ this.props.onSelectAReservation }
                        brands={ this.props.brands }
                    />
                </Item>
            );
        }else{
            return (
                <EmptyListMessage message="No reservations match that criteria" />
            );
        }
    }
    render(){
        return(
            <FlatList
                data={ this.props.reservations }
                renderItem={ this.renderReservationListItem.bind(this) }
                onEndReached={ this.props.loadNextPage }
                onEndReachedThreshold={ 0.75 }
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}
export default ReservationList;