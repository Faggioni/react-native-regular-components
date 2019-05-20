import React, { Component } from "react";
import {
    Fab,
    Icon,
    Button
} from 'native-base';
import { centerLocationFabStyles as styles } from "./styles";

class MapToolsFab extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            active: false
        }
    }
    toggleFab(){
        this.setState({ active: ! this.state.active });
    }
    onPressMapClearButton(){
        this.setState({ active: ! this.state.active });
        this.props.onPressClearMapRoute();
    }
    render(){
        return(
            <Fab
                containerStyle={ this.styles.containerStyle }
                active={ this.state.active }
                style={ this.styles.fabStyle }
                position="bottomLeft"
                direction="up"
                onPress={ this.toggleFab.bind(this) }>
                <Icon name="build" type="MaterialIcons" style={ this.styles.iconStyle }  />
                    <Button style={{ backgroundColor: '#fff' }} onPress={ this.onPressMapClearButton.bind(this) }>
                        <Icon name="location-off" type="MaterialIcons" style={ this.styles.iconStyle } />
                    </Button>
            </Fab>
        );
    }
}
export default MapToolsFab;
