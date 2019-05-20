import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';
import { flashButtonStyles as styles } from './styles';

class FlashButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={this.styles.wrapperStyle}
                >
                    <Icon
                        type="MaterialIcons"
                        name={this.props.iconName}
                        style={this.styles.iconColor}
                    />
                </TouchableOpacity>
            </View>

        );
    }
}
export default FlashButton;