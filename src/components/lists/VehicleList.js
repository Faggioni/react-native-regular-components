import React, { Component } from "react";
import { FlatList, View } from 'react-native';
import VehicleListItem from '../listitems/VehicleListItem';
import EmptyListMessage from '../listsmessages/EmptyListMessage';

class VehicleList extends Component{
    constructor(props){
        super(props);
    }
    showListContent({ item }){
        return (
            <VehicleListItem
                key={ item.id }
                vehicle={ item }
                onPressAvehicle={ this.props.onSelectVehicle }
            />
        );
    }
    showList(){
        if(this.props.listData.length > 0){
            return(
                <FlatList
                    renderItem={ this.showListContent.bind(this) }
                    data={ this.props.listData }
                />
            );
        }else{
            return(
                <EmptyListMessage
                    message={ this.props.emptyListMessage }
                />
            );
        }
    }
    render(){
        return(
            <View style={{ flex:1 }}>
                { this.showList() }
            </View>

        );
    }
}
export default VehicleList;
