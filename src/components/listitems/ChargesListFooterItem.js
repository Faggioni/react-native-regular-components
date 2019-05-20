import React, { Component } from 'react';
import { Text } from 'react-native'
import { Left, ListItem, Right } from "native-base";
import { chargesFooterListItemStyles as styles } from './styles';

class ChargesListFooterItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <ListItem itemDivider>
                <Left style={this.styles.leftWrapper}>
                    <Text style={this.styles.headerTextStyle}>{this.props.description}</Text>
                </Left>
                <Right style={this.styles.rightWrapper}>
                    <Text style={this.styles.headerTextStyle}>{this.props.price}</Text>
                </Right>
            </ListItem>
        );
    }
}
export default ChargesListFooterItem;