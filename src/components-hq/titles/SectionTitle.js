import React, { Component } from "react";
import {
    View,
    Text,
    Icon
} from 'native-base';
const commonColor = require('../../theme/variables/commonColor');

class SectionTitle extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View  style={ this.styles.titleWrapper }>
                <Icon
                    name={ this.props.iconName }
                    type={ this.props.iconType }
                    style={ this.styles.iconStyle }
                    fontSize={ 20 }
                />
                <Text style={ this.styles.textStyle } >{ this.props.title }</Text>
            </View>
        );
    }
}
const styles = {
    titleWrapper:{
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    textStyle:{
        color: commonColor.appGeneralFontColor,
        fontSize: 18,
    },
    iconStyle:{
        color: commonColor.caagBlue,
        paddingRight: 10
    }
};
export default SectionTitle;