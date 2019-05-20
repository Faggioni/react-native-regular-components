import React, { Component } from "react";
import {
    Header,
    Icon,
    Input,
    Item
} from 'native-base'
import GeneralUseInput from '../inputs/GeneralUseInput'

class HomeConsoleSearchBox extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Item>
                <Icon name="ios-search" style={{ color:"#00a0e1", padding: 5 }}/>
                <GeneralUseInput
                    placeholder="Search Address"
                />
            </Item>
        );
    }
}
const styles = {
};
export default HomeConsoleSearchBox;
