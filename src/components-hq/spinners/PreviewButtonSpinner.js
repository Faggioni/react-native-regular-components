import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native'

class PreviewButtonSpinner extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ActivityIndicator
                size="small"
                color="#000"
                animating
                hidesWhenStopped
            />
        );
    }
}
export default PreviewButtonSpinner;