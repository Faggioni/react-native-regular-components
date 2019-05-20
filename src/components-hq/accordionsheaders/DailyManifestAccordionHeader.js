import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { dailyManifestHeader as styles } from './styles';
import ManifestStatusButton from '../../components/buttons/ManifestStatusButton';

class DailyManifestAccordionHeader extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={this.styles.componentWrapper}>
                <View style={this.styles.tableItemStyle}>
                    <Text style={this.styles.headerElementStyle}>{this.props.content.returnDate}</Text>
                </View>
                <View style={this.styles.tableItemStyle}>
                    <Text style={this.styles.headerElementStyle}>{this.props.content.label}</Text>
                </View>
                <View style={this.styles.tableItemStyle}>
                    <Text style={this.styles.headerElementStyle}>{this.props.content.contact}</Text>
                </View>
                <View style={this.styles.tableItemStyle}>
                    <ManifestStatusButton
                        status={this.props.content.status}
                    />
                </View>
            </View>
        );
    }
}
export default DailyManifestAccordionHeader;