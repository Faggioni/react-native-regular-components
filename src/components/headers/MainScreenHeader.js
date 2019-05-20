import React, { Component } from "react";
import {
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { mainScreenHeaderStyles as styles } from './styles';

class MainScreenHeader extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Header>
                <Left>
                    <Button transparent
                        onPress={ () => Actions.drawerOpen() }
                    >
                        <Icon style={ this.styles.mainHeaderIconStyle } type="MaterialCommunityIcons" name='menu' />
                    </Button>
                </Left>
                <Body>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon style={ this.styles.mainHeaderIconStyle } type="MaterialCommunityIcons" name='magnify' />
                    </Button>
                    <Button transparent>
                        <Icon style={ this.styles.mainHeaderIconStyle } type="MaterialCommunityIcons" name='tune' />
                    </Button>
                    <Button transparent>
                        <Icon style={ this.styles.mainHeaderIconStyle } type="MaterialCommunityIcons" name='chart-pie' />
                    </Button>
                    <Button transparent>
                        <Icon style={ this.styles.mainHeaderIconStyle } type="MaterialCommunityIcons" name='apple-safari' />
                    </Button>
                    
                </Right>
            </Header>
        );
    }
}
export default MainScreenHeader;
