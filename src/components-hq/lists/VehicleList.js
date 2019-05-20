import React, { Component } from 'react';
import { List, ListItem } from "native-base";
import { vehicleListStyles as styles } from "./styles";

/*
 * Helpers
 */
import DataValidator from "../../modules/helpers/validation/DataValidator";

/*
 * Custom Components
 */
import VehicleItem from "../listitems/VehicleListItem";
import EmptyListMessage from '../messages/EmptyListMessage';

class VehicleList extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.validator = new DataValidator();
    }
    showVehiclesItems(){
        if( this.validator.isEmpty( this.props.vehicles ) ){
            return (<EmptyListMessage message="No vehicles match that criteria" />);
        }else{
            return this.props.vehicles.map( (vehicle) =>
                <ListItem key={ vehicle.id }>
                    <VehicleItem
                        vehicle={ vehicle }
                    />
                </ListItem>
            );
        }
    }
    render(){
        return(
            <List>
                { this.showVehiclesItems() }
            </List>
        );
    }
}
export default VehicleList;