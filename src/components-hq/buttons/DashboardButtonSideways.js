import React,{ Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button, Icon } from 'native-base';
const commonColor = require('../../theme/variables/commonColor');

export default class DashboardButtonSideways extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
        this.height = Dimensions.get('window').height;
        this.width = Dimensions.get('window').width;
    }
    componentWillMount(){
        if(this.width < 500){
            this.styles.componentWrapper = {
                marginTop: '5%'
            };
            this.styles.buttonWrapper = {
                height:100,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                borderColor: "#ebf1f4",
                borderWidth: 2,
                marginBottom: 15
            };
            this.styles.buttonContentWrapper = {
                flex:1,
                alignItems: 'center',
                paddingTop: 10
            };
            this.styles.textStyle = {
                color: commonColor.caagBlue,
                fontSize: 15,
            };
            this.styles.itemNumberStyle = {
                fontSize:20,
                color: commonColor.caagBlue
            };
        }else{
            this.styles.componentWrapper = {
                marginTop: '5%',
                marginRight: '5%'
            };
            this.styles.buttonWrapper = {
                height:120,
                backgroundColor: '#fff',
                borderRadius: 10,
                borderColor: "#ebf1f4",
                borderWidth: 5,
                marginBottom: 20
            };
            this.styles.buttonContentWrapper = {
                flex:1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                paddingTop: 10
            };
            this.styles.textStyle = {
                color: commonColor.caagBlue,
                fontSize: 18,
            };
            this.styles.itemNumberStyle = {
                fontSize:24,
                color: commonColor.caagBlue
            };
        }
    }
    showButtonContent(){
        if( (this.width < 500) ){
            return (
                <View style={ { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' } }>
                    <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: this.props.color, justifyContent: 'center' }}>
                        <Icon type={ this.props.type ? this.props.type : '' } name={ this.props.iconName }  color={ this.props.color } style={ this.styles.iconStyle } />
                    </View>
                    <View style={{ paddingLeft: 20, flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={ [this.styles.itemNumberStyle, { textAlign: 'left' }] }>{ this.props.itemNumber }</Text>
                        <Text style={ [this.styles.textStyle, { textAlign: 'left' }] }>{ this.props.buttonText }</Text>
                    </View>
                </View>
            );
        }else{
            return (
                <View>
                    <View style={ { flexDirection: 'row', justifyContent: 'flex-start' } }>
                        <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: this.props.color, justifyContent: 'center' }}>
                            <Icon type={ this.props.type ? this.props.type : '' } name={ this.props.iconName }  color={ this.props.color } style={ this.styles.iconStyle } />
                        </View>
                        <View style={ { marginLeft: 20 } }>
                            <Text style={ [this.styles.itemNumberStyle, { textAlign: 'left' }] }>{ this.props.itemNumber }</Text>
                            <Text style={ [this.styles.textStyle, { textAlign: 'left' }] }>{ this.props.buttonText }</Text>
                        </View>
                    </View>
                </View>
            );
        }
    }
    render(){
        return(
            <View style={ this.styles.componentWrapper }>
                <Button
                    style={ this.styles.buttonWrapper }
                    onPress={ this.props.onPress }
                >
                    <View style={ this.styles.buttonContentWrapper }>
                        { this.showButtonContent() }
                    </View>
                </Button>
            </View>
        );
    }
}
const styles = {
    buttonContent:{
        flex: 1,
        flexDirection: 'row',
    },
    iconStyle: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        opacity: 1,
    }
};
