import React, { Component } from "react";
import {
    Fab,
    Icon
} from 'native-base';
import { centerLocationFabStyles as styles } from "./styles";

class CenterLocationFab extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            active: false
        }
    }
    render(){
        return(
            <Fab
                containerStyle={ this.styles.containerStyle }
                style={ this.styles.fabStyle }
                position="bottomRight"
                onPress={ this.props.onPress }>
                <Icon name="my-location" type="MaterialIcons" style={ this.styles.iconStyle }  />
            </Fab>
        );
    }
}
export default CenterLocationFab;
