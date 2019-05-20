import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { authStatusBarStyles as styles } from './styles';

class AuthStatusBar extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <StatusBar
                backgroundColor={ this.styles.statusBarStyles }
                barStyle="light-content"
            />
        );
    }
}
export default AuthStatusBar;