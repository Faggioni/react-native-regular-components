import React, { Component } from "react";
import {
    Spinner
} from 'native-base';
const commonColor = require('../../theme/variables/commonColor');

class ScreenSpinner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Spinner
                color={ commonColor.caagBlue }
            />
        );
    }
}
const styles = {
};
export default ScreenSpinner;