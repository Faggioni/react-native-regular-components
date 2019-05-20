import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { noVehiclesMessageStyles as styles } from './styles';

class NoVehiclesMessage extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <View>
                    <Text style={ this.styles.regularText }>Vehicles</Text>
                </View>
                <View>
                    <Text style={ this.styles.regularText }>There are no available cars.</Text>
                </View>
            </View>
        );
    }
}
export default NoVehiclesMessage;