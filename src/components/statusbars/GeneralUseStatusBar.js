import React, { Component } from "react";
import { StatusBar } from 'react-native';
import { generalUseStatusBarStyles as styles } from './styles';

class GeneralUseStatusBar extends Component{
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
export default GeneralUseStatusBar;
