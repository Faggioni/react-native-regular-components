import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

class StatusButton extends Component {
    constructor(props) {
        super(props);
        this.styles = styles;
    }
    showButton() {
        switch (this.props.status) {
            case 'available':
                return (
                    <Button style={this.styles.availableButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Available</Text>
                    </Button>
                );
            case 'dirty':
                return (
                    <Button style={this.styles.availableButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Dirty</Text>
                    </Button>
                );
            case 'out_of_service':
                return (
                    <Button style={this.styles.outOfServiceButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Out of Service</Text>
                    </Button>
                );
            case 'on_sale':
                return (
                    <Button style={this.styles.onSaleButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>On Sale</Text>
                    </Button>
                );
            case 'sold':
                return (
                    <Button style={this.styles.soldButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Sold</Text>
                    </Button>
                );
            case 'complementary':
                return (
                    <Button style={this.styles.complementaryButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Complementary</Text>
                    </Button>
                );
            case 'new':
                return (
                    <Button style={this.styles.rentalButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>New</Text>
                    </Button>
                );
            case 'rental':
                return (
                    <Button style={this.styles.rentalButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Rental</Text>
                    </Button>
                );
            default:
                return (
                    <Button style={this.styles.availableButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Dirty</Text>
                    </Button>
                );
        }
    }
    render() {
        return (
            <View>
                { this.showButton() }
            </View>
        );
    }
}

const styles = {
    openButtonStyle: {
        backgroundColor: "#F0AD4E"
    },
    buttonsTextStyle: {
        color: "#fff",
        fontSize: 12
    },
    rentalButtonStyle:{
        backgroundColor: '#4272a8'
    },
    completedButtonStyle:{
        backgroundColor: "#4272A8"
    },
    complementaryButtonStyle:{
        backgroundColor: "#777777"
    },
    availableButtonStyle:{
        backgroundColor: "#50CC99"
    },
    cancelledButtonStyle:{
        backgroundColor: "#cc4915"
    },
    cancelledPaidButtonStyle:{
        backgroundColor: "#50CC99"
    },
    outOfServiceButtonStyle:{
        backgroundColor: '#cc4915'
    },
    soldButtonStyle:{
        backgroundColor: '#f0ad4e'
    },
    onSaleButtonStyle: {
        backgroundColor: '#5bc0de'
    }
};
export default StatusButton;
