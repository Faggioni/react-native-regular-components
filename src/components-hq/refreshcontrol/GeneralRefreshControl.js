import React, { Component } from 'react';
import { RefreshControl } from 'react-native'
import { generalResfreshControlStyles as styles } from "./styles";

class GeneralRefreshControl extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <RefreshControl
                refreshing={ this.props.refreshing }
                onRefresh={ this.props.onRefresh }
                colors={ [ this.styles.refreshColor ] }
                tintColor={ this.styles.refreshColor }
                enabled
                title="Refreshing"
            />
        );
    }
}
export default GeneralRefreshControl;