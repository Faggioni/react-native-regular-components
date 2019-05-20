import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { changeCameraStyles as styles } from './styles';

class ChangeCamera extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View>
                <TouchableOpacity
                    style={this.styles.wrapperStyle}
                    onPress={this.props.onPress}
                >
                    <Icon
                        type="MaterialIcons"
                        name="cached"
                        style={this.styles.iconColor}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
export default ChangeCamera;