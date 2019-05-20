import React, { Component } from 'react';
import { Text } from 'native-base'
import { authTitleStyles as styles } from './styles';

class AuthTitle extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Text style={ this.styles.titleStyle }>
                { this.props.title }
            </Text>
        );
    }
}
export default AuthTitle;