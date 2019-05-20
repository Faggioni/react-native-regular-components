import React, { Component } from "react";
import { View } from 'react-native';
import {
    Accordion as AccordionNB,
    Icon, Text
} from 'native-base'
import { accordionStyles as styles } from './styles';

class AccordionFAQ extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    renderHeader(content, expanded){
        if(expanded){
            return(
                <View
                    style={ this.styles.headerWrapperExpanded }
                >
                    <View style={ this.styles.headerTextWrapper }>
                        <Text style={ this.styles.headerTextStyles }>
                            { content.title }
                        </Text>
                    </View>
                    <View style={ this.styles.headerIconWrapper }>
                        <Icon style={ this.styles.headerIconStyles } type="MaterialIcons" name="keyboard-arrow-up" />
                    </View>
                </View>
            );
        }else{
            return(
                <View style={ this.styles.headerWrapper }>
                    <View style={ this.styles.headerTextWrapper }>
                        <Text style={ this.styles.headerTextStyles }>
                            { content.title }
                        </Text>
                    </View>
                    <View style={ this.styles.headerIconWrapper }>
                        <Icon style={ this.styles.headerIconStyles } type="MaterialIcons" name="keyboard-arrow-down" />
                    </View>
                </View>
            );
        }
     
    }
    renderContent(content, expanded) {
        if(expanded){
            return (
                <View style={this.styles.contentWrapperExpanded}>
                    <Text
                        style={ this.styles.contentTextStyle }
                    >
                        { content.content }
                    </Text>
                </View>
            );
        }else{
            return (
                <View style={this.styles.contentWrapper}>
                    <Text
                        style={ this.styles.contentTextStyle }
                    >
                        { content.content }
                    </Text>
                </View>
            );
        }
        
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <AccordionNB
                dataArray={ this.props.data }
                renderHeader={ this.renderHeader.bind(this) }
                renderContent={ this.renderContent.bind(this) }
                />
            </View>
        );
    }
}
export default AccordionFAQ;
