import React, { Component } from 'react';
import {
    View,
    Picker,
    Icon,
} from 'native-base';
import { hqRegionPickerStyle as styles } from './styles';


class HQRegionPicker extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={{ borderColor: '#fff', borderRadius: 5, borderWidth: 1 }}>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-down-outline" style={ this.styles.iconStyles } />}
                    style={{ width: undefined }}
                    iosHeader="Select Your Installation Region"
                    placeholder="Select Your Installation Region"
                    placeholderStyle={{ color: "#fff" }}
                    itemStyle={{ borderColor: '#fff' }}
                    placeholderIconColor="#fff"
                    selectedValue={ this.props.selectedValue }
                    onValueChange={ this.props.onValueChange }
                >
                    <Picker.Item label="Select your installation region" value="" />
                    <Picker.Item label="America" value="https://api.caagcrm.com/api/" />
                    <Picker.Item label="Europe" value="https://api-europe.caagcrm.com/api-europe/" />
                    <Picker.Item label="Asia" value="https://api-asia.caagcrm.com/api-asia/" />
                </Picker>
            </View>
        );
    }
}
export default HQRegionPicker;