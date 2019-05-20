import React, { Component } from "react";
import {TouchableOpacity} from 'react-native';
import {Text} from "native-base";
import { modalActionButton as styles } from './styles';
import commonColor from '../../theme/variables/commonColor';

class ModalActionButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            backgroundColor: ''
        };
    }
    render(){
        return(
            <TouchableOpacity
                onPress={ this.props.onPress }
                style={ this.styles.touchableStyles }
            >
                <Text style={ this.styles.buttonTextStyle }>
                    { this.props.buttonText }
                </Text>
            </TouchableOpacity>
        );
    }
}
export default ModalActionButton;