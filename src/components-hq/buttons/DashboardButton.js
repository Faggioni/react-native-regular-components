import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
const commonColor = require('../../theme/variables/commonColor');

export default class DashboardButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <Button
                style={ this.styles.buttonWrapper }
                onPress={ this.props.onPress }
            >
                <View style={ this.styles.buttonContent }>
                    <View>
                        <Icon type={ this.props.type ? this.props.type : '' } name={ this.props.iconName }  color={ commonColor.caagBlue } style={ this.styles.iconStyle } />
                        <Text style={ this.styles.itemNumberStyle }>{ this.props.itemNumber }</Text>
                        <Text style={ this.styles.textStyle }>{ this.props.buttonText }</Text>
                    </View>
                </View>
            </Button>
        );
    }
}
const styles = {
    buttonWrapper: {
        flex: 0.3,
        height:100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: commonColor.caagBlue,
        borderWidth: 2
    },
    buttonContent:{
        flex:1,
        alignItems: 'center',
        paddingTop: 10
    },
    iconStyle: {
        fontSize: 30,
        color: commonColor.caagBlue,
        alignSelf: 'center',
        opacity: 1
    },
    textStyle: {
        color: commonColor.caagBlue,
        alignSelf: 'center',
        fontSize: 12,
        textAlign: 'center'
    },
    itemNumberStyle: {
        fontSize:20,
        color: commonColor.caagBlue,
        textAlign: 'center'
    }
};
