import React, { Component } from 'react';
import { View, Text, Icon } from "native-base";
import { preReserveItemsStyles as styles } from "./styles";

class PreReserveScreenItems extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <View style={ this.styles.preReserveItemWrapperInner }>
                    <Icon name={ this.props.iconName } type={ this.props.iconType } style={ this.styles.preReserveIconStyle }/>
                </View>
                <View style={ this.styles.preReserveItemWrapperInner }>
                    <Text style={ this.styles.preReserveTextStyle }>{ this.props.description }</Text>
                </View>
            </View>
        );
    }
}
export default PreReserveScreenItems;