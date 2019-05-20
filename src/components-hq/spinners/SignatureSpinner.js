import React, { Component } from "react";
import {
    View,
    Spinner,

} from 'native-base';

class SignatureSpinner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.searchSpinnerWrapper }>
                <Spinner
                    color="#fff"
                />
            </View>
        );
    }
}
const styles = {
    searchSpinnerWrapper:{
    }
};
export default SignatureSpinner;