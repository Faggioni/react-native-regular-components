import React, { Component } from "react";
import {
    Icon,
    FooterTab,
    Button,
    Footer as FTab, Text
} from "native-base";
import { Actions } from 'react-native-router-flux';
/*
 * Styles
 */
import { footerNavStyles as styles } from './styles';

class FooterNav extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
    }

    render() {
        return (
            <FTab>
                <FooterTab style={this.styles.footerWrapper}>
                    <Button onPress={() => Actions.manifest()}>
                        <Icon
                            name="home"
                            type="MaterialIcons"
                            style={this.styles.iconStyle}
                        />
                        <Text style={this.styles.footerItemTextStyle}>Manifest</Text>
                    </Button>
                    <Button onPress={() => Actions.reservationsScreen( )}>
                        <Icon
                            name="assignment-turned-in"
                            type="MaterialIcons"
                            style={this.styles.iconStyle}
                        />
                        <Text style={this.styles.footerItemTextStyle}>Reservations</Text>
                    </Button>
                    <Button onPress={() => Actions.vehicleListScreen()}>
                        <Icon
                            name="directions-car"
                            type="MaterialIcons"
                            style={this.styles.iconStyle}
                        />
                        <Text style={this.styles.footerItemTextStyle}>Vehicles</Text>
                    </Button>
                </FooterTab>
            </FTab>
        );
    }
}
export default FooterNav;