import React, { Component } from "react";
import {
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Text,
    View, Title
} from 'native-base';
import WordFormmating from '../../modules/helpers/formatting/WordFormmating';
import { webviewHeaderStyles as styles } from './styles';

class WebviewHeader extends Component {
    constructor( props ) {
        super( props );
        this.styles = styles;
        this.formatter = new WordFormmating();
    }
    showUrl(){
        if(this.props.url){
            return (
                <Text style={this.styles.urlTextStyle}>{this.formatter.letterTrim( this.props.url, 30 )}</Text>
            );
        }
    }
    render() {
        return (
            <Header
                style={ this.styles.headerStyle }
            >
                <Left style={ this.styles.leftSideStyle }>
                    <Button transparent
                            onPress={ this.props.onPressBackButton }
                    >
                        <Icon style={ this.styles.backButtonIconStyle } type="MaterialCommunityIcons" name='arrow-left' />
                    </Button>
                </Left>
                <Body style={ this.styles.bodySideStyle }>
                    <Title style={ this.styles.titleStyle }>
                        { this.props.headerTitle }
                    </Title>
                </Body>
                <Right style={ this.styles.rightSideStyle }/>
            </Header>
        );
    }
}

export default WebviewHeader;
