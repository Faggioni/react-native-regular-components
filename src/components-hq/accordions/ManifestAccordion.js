import React, { Component } from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
} from 'react-native';
import { manifestAccordionStyles as styles } from './style';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import DailyManifestAccordionItem from '../../components/accordionsitems/DailyManifestAccordionItem';
import DailyManifestAccordionHeader from '../../components/accordionsheaders/DailyManifestAccordionHeader';
import ManifestAccordionHeader from '../../components/headers/ManifestAccordionHeader';
import ManifestAccordionTableHeader from '../../components/tablesheaders/ManifestAccordionTableHeader';


class ManifestAccordion extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeSections: [],
            collapsed: true,
            transitionTime: 100
        };
        this.styles = styles;
    }
    setSections = sections => {
        this.setState({
            activeSections: sections,
        });
    };

    renderHeader = (section, index, isActive, sections) => {
        return (
            <Animatable.View
                duration={this.state.transitionTime}
                style={(index % 2 === 1) ? this.styles.evenRowStyle : this.styles.oddRowStyle}
                transition="backgroundColor"
            >
                <DailyManifestAccordionHeader
                    content={section.content}
                />
            </Animatable.View>
        );
    };
    renderContent = (section, index, isActive, sections)  => {
        return (
            <Animatable.View
                duration={this.state.transitionTime}
                transition="backgroundColor"
            >
                <DailyManifestAccordionItem
                    content={section.content}
                />
            </Animatable.View>
        );
    };
    /*Header should */
    render() {
        const { activeSections } = this.state;
        return (
            <View style={this.styles.componentWrapper}>
                <ScrollView contentContainerStyle={this.styles.innerWrapper}>
                    <ManifestAccordionHeader
                        headerText={this.props.header}
                    />
                    <ManifestAccordionTableHeader />
                    <Accordion
                        activeSections={activeSections}
                        sections={this.props.data.reservations}
                        touchableComponent={TouchableOpacity}
                        renderHeader={this.renderHeader.bind(this)}
                        renderContent={this.renderContent.bind(this)}
                        duration={400}
                        onChange={this.setSections.bind(this)}
                    />
                </ScrollView>
            </View>
        );
    }
}
export default ManifestAccordion;