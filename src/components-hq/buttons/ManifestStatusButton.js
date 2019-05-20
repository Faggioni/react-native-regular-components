import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { manifestStatusButtonStyles as styles } from "./styles";

class ManifestStatusButton extends Component {
    constructor(props) {
        super(props);
        this.styles = styles;
    }
    showButton() {
        switch (this.props.status) {
            case 'quote':
                return (
                    <View style={[this.styles.commonStyles,this.styles.quoteButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Quote</Text>
                    </View>
                );
            case 'open':
                return (
                    <View style={[this.styles.commonStyles,this.styles.openButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Open</Text>
                    </View>
                );
            case 'rental':
                return (
                    <View style={[this.styles.commonStyles, this.styles.rentalButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Rental</Text>
                    </View>
                );
            case 'completed':
                return (
                    <View style={[this.styles.commonStyles, this.styles.completedButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Completed</Text>
                    </View>
                );
            case 'cancelled':
                return (
                    <View style={[this.styles.commonStyles, this.styles.cancelledButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Cancelled</Text>
                    </View>
                );
            case 'cancelled-paid':
                return (
                    <View style={[this.styles.commonStyles, this.styles.cancelledPaidButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Cancelled Paid</Text>
                    </View>
                );
            case 'no-show':
                return (
                    <View style={[this.styles.commonStyles, this.styles.cancelledButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>No Show</Text>
                    </View>
                );
            case 'no-show-paid':
                return (
                    <View style={[this.styles.commonStyles, this.styles.cancelledPaidButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>No Show Paid</Text>
                    </View>
                );
            case 'pending':
                return (
                    <View style={[this.styles.commonStyles,this.styles.quoteButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Pending</Text>
                    </View>
                );
            default:
                return (
                    <View style={[this.styles.commonStyles, this.styles.quoteButtonStyle]}>
                        <Text style={this.styles.buttonsTextStyle}>Pending</Text>
                    </View>
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
export default ManifestStatusButton;
