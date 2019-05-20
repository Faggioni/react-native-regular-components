import React, { Component } from 'react';
import { View } from 'react-native'
import { Icon } from "native-base";
import { bigIconStyles as styles } from './styles';

class BigIcon extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }

    render() {
        return (
            <View style={this.styles.iconWrapper}>
                <Icon name={this.props.name} type={this.props.type} style={this.styles.iconStyles}/>
            </View>
        );
    }
}

export default BigIcon;