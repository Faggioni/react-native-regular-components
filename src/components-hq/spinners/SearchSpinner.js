import React, { Component } from "react";
import {
    View,
    Spinner,

} from 'native-base';
const commonColor = require('../../theme/variables/commonColor');

class SearchSpinner extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.searchSpinnerWrapper }>
                <Spinner
                    color={ commonColor.caagBlue }
                />
            </View>
        );
    }
}
const styles = {
    searchSpinnerWrapper:{
        paddingTop:5,
        paddingBottom: 5,

    }
};
export default SearchSpinner;