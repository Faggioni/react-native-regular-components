import React, { Component } from "react";
import {
    View,
} from 'react-native';
import {
    Body,
    Icon,
    Left,
    ListItem,
    Text
} from "native-base";
import styles from '../styles';


class SideBarItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <ListItem
                button
                icon
                onPress={ this.props.onPress }
                style={ this.styles.links }
            >
                <Left>
                    <View style={ this.styles.iconWrapper }>
                        <Icon
                            name={ this.props.name }
                            type={ this.props.type }
                            style={ this.styles.sidebarIconsStyle }
                        />
                    </View>
        
                </Left>
                <Body>
                    <Text style={ this.styles.sidebarTextStyle }>
                        { this.props.label }
                    </Text>
                </Body>
            </ListItem>
        );
    }
}
export default SideBarItem;