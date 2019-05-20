import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { dailyManifestItem as styles } from './styles';
import TextItem from './components/TextItem';
import PhoneItem from './components/PhoneItem';
import EmailItem from './components/EmailItem';
import StatusButton from "../buttons/StatusButton";


class DailyManifestAccordionItem extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return (
            <View style={this.styles.componentWrapper}>
                <View style={{ flex: 6 }}>
                    <EmailItem
                        content={this.props.content.email}
                    />
                    <TextItem
                        label="Vehicle: "
                        content={this.props.content.vehicle}
                    />
                </View>
                <View style={{ flex: 4 }}>
                    <PhoneItem
                        content={this.props.content.phone}
                    />

                    <TextItem
                        label="Amount due: "
                        content={this.props.content.amountDue}
                    />
                </View>
            </View>
        );
    }
}

export default DailyManifestAccordionItem;