import React, { Component } from "react";
import {
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title
} from 'native-base';
import { generalScreenHeaderStyles as styles } from './styles';

class GeneralScreenHeader extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Header>
                <Left style={ this.styles.leftSideStyle }>
                    <Button transparent
                            onPress={ this.props.onPressBackButton }
                    >
                        <Icon style={ this.styles.backButtonIconStyle } type="MaterialCommunityIcons" name='arrow-left' />
                    </Button>
                </Left>
                <Body style={ this.styles.bodySideStyle }>
                    <Title style={ this.styles.titleStyle }>
                        { this.props.title }
                    </Title>
                </Body>
                <Right style={ this.styles.rightSideStyle }/>
            </Header>
        );
    }
}
export default GeneralScreenHeader;
