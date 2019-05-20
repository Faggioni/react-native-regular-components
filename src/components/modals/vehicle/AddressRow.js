import React, { Component } from "react";
import { Platform, View,  TouchableOpacity } from 'react-native';
import {
    Icon,
    Text,
    Thumbnail
} from "native-base";
import { addressRowStyles as styles } from "./styles";


class AddressRow extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.googleIcon = require('../../../assets/imgs/externalservices/maps/google.png');
        this.IosMapIcon = require('../../../assets/imgs/externalservices/maps/iosmaps.jpg');
    }
    onPressAddressButton(){
        this.props.goToMap(this.props.vehicle);
    }
    onPressMapIcon(){
        this.props.goToMapExternal(this.props.vehicle);
    }
    showMapIcon(){
        return (Platform.OS === 'ios') ? this.IosMapIcon : this.googleIcon;
    }

    render(){
        //https://stackoverflow.com/questions/43214062/open-maps-google-maps-in-react-native
        return(
            <View style={ this.styles.descriptionRowWrapper }>
                <View style={ this.styles.iconWrapper }>
                    <Icon name="directions" type="MaterialIcons" style={ this.styles.iconStyles }/>
                </View>
                <View style={ this.styles.descriptionWrapper }>
                    <View>
                        <Text style={ this.styles.descriptionMainTextStyles }>{ this.props.streetAddressModal }</Text>
                        <Text style={ this.styles.descriptionTextStyles }>{ this.props.stateAddressModal }</Text>
                    </View>
                </View>
                <View style={ this.styles.descriptionContentWrapper }>
                    <View style={ { flexDirection: 'row', justifyContent: 'flex-end' } }>
                        <TouchableOpacity
                            onPress={ this.onPressMapIcon.bind(this) }
                        >
                            <Thumbnail
                                small
                                source={ this.showMapIcon() }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default AddressRow;
