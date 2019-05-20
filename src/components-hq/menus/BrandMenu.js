import React, { Component } from 'react';
import {
    View,
    Text
} from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from "native-base";

/*
 * Styles
 */
import { brandMenuStyles as styles } from './styles';

class BrandMenu extends Component {
    constructor(props) {
        super(props);
        this.styles = styles;
    }
    brandsOptions(){
        return this.props.brands.map( (item) => {
            return (
                <MenuOption key={ item.id }  onSelect={ this.onSelectOption.bind(this,item) }>
                    <View style={ this.styles.menuOptionInnerWrapper }>
                         <Text style={ this.styles.optionTextStyle }>{item.name}</Text>
                    </View>
                </MenuOption>
            );
        });
    }
    onSelectOption(brand){
        /*Manage by the Screen Component*/
        this.props.onSelectBrand(brand);
    }
    render(){
        return(
            <Menu>
                <MenuTrigger
                    children={
                    <View style={ this.styles.menuTriggerStyle }>
                        <Icon
                            active
                            type="Ionicons"
                            name="add"
                        />
                    </View>
                }>
                </MenuTrigger>
                <MenuOptions>
                    { this.brandsOptions() }
                </MenuOptions>
            </Menu>

        );
    }
}
export default BrandMenu;
