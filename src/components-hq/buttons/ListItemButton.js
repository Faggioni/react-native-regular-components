import React, { Component } from "react";
import { TouchableNativeFeedback } from 'react-native';
import {
    ListItem,
    Body,
    Right,
    Text,
    Icon,
    View
} from 'native-base';
const commonColor = require('../../theme/variables/commonColor');

class ListItemButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <ListItem>
                <TouchableNativeFeedback onPress={ this.props.onPress }>
                    <View>
                        <Body>
                        <Text style={ this.styles.textStyle }>{ this.props.title }</Text>
                        </Body>
                        <Right>
                            <Icon
                                name="long-arrow-right"
                                type="FontAwesome"
                                color="#000"
                            />
                        </Right>
                    </View>
                </TouchableNativeFeedback>
            </ListItem>
        );
    }
}
const styles = {
    textStyle:{
        color: commonColor.appGeneralFontColor
    }
};
export default ListItemButton;