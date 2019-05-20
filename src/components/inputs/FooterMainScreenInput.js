import React, { Component } from "react";
import {TextInput, View} from 'react-native';
import { footerMainScreenInputStyles as styles } from "./styles";
import {
    Icon
} from 'native-base';

class FooterMainScreenInput extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.footerMainScreenWrapper }>
                <View style={this.styles.footerMainScreenInnerWrapper}>
                    <View style={this.styles.footerIconWrapper}>
                        <Icon name="magnifying-glass" type="Entypo" style={ this.styles.footerMainScreenStyles } />
                    </View>
                    <TextInput
                        allowFontScaling
                        autoCorrect
                        style={ this.styles.inputStyles }
                        underlineColorAndroid='transparent'
                        placeholder={ this.props.placeholder }
                        placeholderTextColor={ this.props.placeholderStyle }
                        value={ this.props.searchInputValue }
                        onChangeText={ this.props.onChangeText }
                    />
                </View>
                
            </View>
            
        );
    }
}
export default FooterMainScreenInput;
