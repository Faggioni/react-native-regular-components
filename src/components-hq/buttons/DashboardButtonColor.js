import React,{ Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Icon } from 'native-base';

export default class DashboardButtonColor extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    componentWillMount(){
        if(this.props.color === 'red'){
            this.styles.buttonWrapper.backgroundColor = '#E74C3C';
        }else if(this.props.color === 'blue'){
            this.styles.buttonWrapper.backgroundColor = '#4272A8';
        }else if( this.props.color === 'green' ){
            this.styles.buttonWrapper.backgroundColor = '#3FC380';
        }else{
            this.styles.buttonWrapper.backgroundColor = '#3498DB';
        }

    }
    render(){
        return(
            <Button
                style={ this.styles.buttonWrapper }
                onPress={ this.props.onPress }
            >
                <View style={ this.styles.buttonContent }>
                    <View>
                        <Icon type={ this.props.type ? this.props.type : '' } name={ this.props.iconName } style={ this.styles.iconStyle } />
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
        //backgroundColor: '#4272a8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonContent:{
        flex:1,
        alignItems: 'center',
        paddingTop: 10
    },
    iconStyle: {
        fontSize: 30,
        color: '#fff',
        alignSelf: 'center',
        opacity: 1
    },
    textStyle: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 12,
        textAlign: 'center'
    },
    itemNumberStyle: {
        fontSize:20,
        color: '#fff',
        textAlign: 'center'
    }
};
