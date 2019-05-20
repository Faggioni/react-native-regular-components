import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { authSpinnerStyles as styles } from "./styles";

class AuthSpinner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Spinner
                color={ this.styles.authSpinnerColor }
            />
        );
    }
}
export default AuthSpinner;