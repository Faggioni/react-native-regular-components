import React, { Component } from 'react';
import {
    Header as NativeHeader,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right,
} from 'native-base';
const commonColor = require("../../theme/variables/commonColor");
import BrandMenu from '../menus/BrandMenu';
import { reservationScreenHeaderStyles as styles } from "./styles";

class ReservationsScreenHeader extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            showPicker: false
        };
    }
    showLeftButton(){
        if(this.props.leftButtonIcon){
            if(this.props.actionOnLeftButton){
                return(
                    <Button
                        transparent
                        onPress={ this.props.actionOnLeftButton }
                    >
                        <Icon active
                              type='Ionicons'
                              name='ios-arrow-back'
                        />
                    </Button>
                );
            }else{
                return(
                    <Button
                        transparent
                        onPress={ this.props.onPressLeftButton }
                    >
                        <Icon active
                              type={ this.props.leftButtonType ? this.props.leftButtonType : null }
                              name={ this.props.leftButtonIcon }
                        />
                    </Button>
                );
            }

        }
    }
    touchBrands(){
        this.setState({ showPicker: !this.state.showPicker });
    }
    render(){
        return(
            <NativeHeader style={ { backgroundColor: commonColor.headerColor } }>
                <Left style={ { flex: 1 } }>
                    { this.showLeftButton() }
                </Left>
                <Body style={ this.styles.bodyComponentStyle }>
                <Title style={{ textAlign: 'left' }}>{ this.props.title }</Title>
                </Body>
                <Right>
                    <BrandMenu
                        brands={ this.props.brands }
                        onSelectBrand={ this.props.onSelectBrand }
                    />
                </Right>
            </NativeHeader>
        );
    }
}
export default ReservationsScreenHeader;
