import React, { Component } from 'react';
import { FlatList, View } from 'react-native'
import ReservationListItem from '../listitems/ReservationListItem';
import ListLoadMoreButton from '../buttons/ListLoadMoreButton';
import EmptyListMessage from '../listsmessages/EmptyListMessage';
/**
 * Styles
 */
import { reservationListStyles as styles } from './styles';


/**
 * Helpers
 */
import DataValidator from '../../modules/helpers/validations/DataValidator';

class ReservationList extends Component{
    constructor(props){
        super(props);
        this.validator = new DataValidator();
        this.styles = styles;
    }
    showListContent({ item, index }){
            return(
                <ReservationListItem
                    key={ item.id }
                    reservation={ item }
                    onPressReservation={ this.props.onSelectReservation }
                />
            );
    }
    onLoadMoreReservations(){
        this.props.onPressLoadMoreButton();
    }
    showLoadMoreButton(){
        if( this.validator.isEmpty(this.props.onPressLoadMoreButton) ){
            return (
                <ListLoadMoreButton
                    onPressLoadMore={ this.onLoadMoreReservations.bind(this) }
                />
            );
        }
    }
    showContent(){
        if(this.props.reservationList.length > 0){
            return (
                <FlatList
                    renderItem={ this.showListContent.bind(this) }
                    data={ this.props.reservationList }
                />
            );
        }else{
            return (
                <EmptyListMessage
                    message={ this.props.emptyListMessage }
                />
            )
        }
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                { this.showContent() }
            </View>


        );
    }
}
export default ReservationList;