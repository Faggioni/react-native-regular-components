import React, { Component } from 'react';
import { Text } from 'react-native';
import { Left, ListItem, Right } from "native-base";
import { chargeListItemStyles as styles } from './styles';

class ChargesListItem extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }

    render() {
        return (
            <ListItem>
                <Left style={ this.styles.leftWrapper }>
                    <Text style={ this.styles.textStyles }>{this.props.description}</Text>
                </Left>
                <Right style={ this.styles.rightWrapper }>
                    <Text numberOfLines={1} style={ this.styles.textStyles }>{this.props.price}</Text>
                </Right>
            </ListItem>
        );
    }
}

export default ChargesListItem;