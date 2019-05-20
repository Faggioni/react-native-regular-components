import React, { Component } from "react";
import {TouchableOpacity, View} from 'react-native';
import {Text} from "native-base";
import { startButton as styles } from './styles';
import commonColor from "../../../theme/variables/commonColor";

class StartButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            reserveStateStyles: {
                touchableStyle: {
                    borderColor: commonColor.brandPrimary,
                    backgroundColor: '#fff',
                },
                textColor: {
                    color: commonColor.brandPrimary
                }
            }
        };
    }
    componentWillMount(){
        if(this.props.reserveInProgress){
            this.setState({
                reserveStateStyles: {
                    touchableStyle: {
                        borderColor: commonColor.brandPrimary,
                        backgroundColor: commonColor.brandPrimary,
                    },
                    textColor: {
                        color: '#fff'
                    }
                }
            });
        }
    }
    render(){
        return(
            <TouchableOpacity
                onPress={ this.props.onPressStartButton }
                style={ [ this.styles.touchableStyles, this.state.reserveStateStyles.touchableStyle ] }
            >
                <Text style={ this.state.reserveStateStyles.textColor }>
                    Start
                </Text>
            </TouchableOpacity>
        );
    }
}
export default StartButton;
