import React, { Component } from "react";
import { Spinner } from 'native-base';
import { screenSpinnerStyles as styles } from './styles';

class ScreenSpinner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Spinner
                color={ this.styles.color }
            />
        );
    }
}

export default ScreenSpinner;
