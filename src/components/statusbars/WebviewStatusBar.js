import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { webviewStatusBarStyles as styles } from './styles';

class WebviewStatusBar extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <StatusBar
                backgroundColor={ this.styles.backgroundColor }
            />
        );
    }
}
export default WebviewStatusBar;