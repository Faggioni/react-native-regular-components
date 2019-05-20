import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { reserveButton as styles } from './styles';
import commonColor from '../../../theme/variables/commonColor';

class ReserveButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            reserveStateStyles: {
                touchableStyle: {
                    borderColor: commonColor.brandPrimary,
                    backgroundColor: commonColor.brandPrimary,
                },
                textColor: {
                    color: '#fff'
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
                        backgroundColor: '#fff',
                    },
                    textColor: {
                        color: commonColor.brandPrimary
                    }
                }
            });
        }
    }
    render(){
        return(
            <TouchableOpacity
                onPress={ this.props.onPressReserveButton }
                style={ [ this.styles.touchableStyles, this.state.reserveStateStyles.touchableStyle ] }>
                <Text style={ this.state.reserveStateStyles.textColor }>
                    Reserve
                </Text>
            </TouchableOpacity>
        );
    }
}
export default ReserveButton;
