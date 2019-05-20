import React, { Component } from 'react';
import {
    Header as NativeHeader,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right
} from 'native-base';
import { Actions } from 'react-native-router-flux';
/**
 * Styles
 */
import { headerStyles as styles } from './styles';

class Header extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }
    onPressBackButton(){
        Actions.pop();
    }
    render() {
        return (
            <NativeHeader style={ this.styles.headerStyles }>
                <Left style={this.styles.leftWrapperStyle}>
                    <Button
                        transparent
                        onPress={this.onPressBackButton.bind(this)}
                    >
                        <Icon
                            active
                            type='Ionicons'
                            name='ios-arrow-back'
                        />
                    </Button>
                </Left>
                <Body style={this.styles.bodyStyles}>
                <Title style={this.styles.titleStyle}>{this.props.title}</Title>
                </Body>
                <Right />
            </NativeHeader>
        );
    }
}
export default Header;