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
            case 'quote':
                return (
                    <Button style={this.styles.quoteButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Quote</Text>
                    </Button>
                );
            case 'open':
                return (
                    <Button style={this.styles.openButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Open</Text>
                    </Button>
                );
            case 'rental':
                return (
                    <Button style={this.styles.rentalButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Rental</Text>
                    </Button>
                );
            case 'completed':
                return (
                    <Button style={this.styles.completedButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Completed</Text>
                    </Button>
                );
            case 'cancelled':
                return (
                    <Button style={this.styles.cancelledButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Cancelled</Text>
                    </Button>
                );
            case 'cancelled-paid':
                return (
                    <Button style={this.styles.cancelledPaidButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Cancelled Paid</Text>
                    </Button>
                );
            case 'no-show':
                return (
                    <Button style={this.styles.cancelledButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>No Show</Text>
                    </Button>
                );
            case 'no-show-paid':
                return (
                    <Button style={this.styles.cancelledPaidButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>No Show Paid</Text>
                    </Button>
                );
            case 'pending':
                return (
                    <Button style={this.styles.quoteButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Pending</Text>
                    </Button>
                );
            default:
                return (
                    <Button style={this.styles.quoteButtonStyle} small>
                        <Text style={this.styles.buttonsTextStyle}>Pending</Text>
                    </Button>
                );
        }
    }
    render() {
        return (
            <View>
                {this.showButton()}
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
    completedButtonStyle:{
        backgroundColor: "#4272A8"
    },
    quoteButtonStyle:{
        backgroundColor: "#777777"
    },
    rentalButtonStyle:{
        backgroundColor: "#50CC99"
    },
    cancelledButtonStyle:{
        backgroundColor: "#cc4915"
    },
    cancelledPaidButtonStyle:{
        backgroundColor: "#50CC99"
    }

};
export default StatusButton;
