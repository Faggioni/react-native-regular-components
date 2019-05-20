import React, { Component } from 'react';
import {
    Spinner
} from 'native-base';
import { loginModalSpinnerStyles as styles } from './styles';

class ModalSpinner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Spinner
                color={ this.styles.color }
            />
        )
    }
}
export default ModalSpinner;