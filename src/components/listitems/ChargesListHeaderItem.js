import React, { Component } from 'react';
import { Text } from 'react-native'
import { ListItem } from "native-base";
import { chargeHeaderListItemStyles as styles } from './styles';

class ChargesListHeaderItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <ListItem itemDivider>
                <Text style={this.styles.headerTextStyle } >{ this.props.headerText }</Text>
            </ListItem>
        );
    }
}
export default ChargesListHeaderItem;