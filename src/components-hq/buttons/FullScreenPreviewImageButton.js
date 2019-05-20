import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'native-base';
import PreviewButtonSpinner from "../spinners/PreviewButtonSpinner";
import { fullScreenPreviewImageButton as styles } from './styles';


class FullScreenPreviewImageButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    showButtonContent(){
        if(this.props.isLoadingSubmit){
            return <PreviewButtonSpinner />;
        }else{
            return (
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={ this.styles.buttonText }>Save</Text>
                    <Icon name="chevron-right" type="MaterialIcons" style={{color: '#000', fontSize: 22}} />
                </View>
            );
        }
    }
    render(){
        // add isLoading on submit
        return(
            <TouchableOpacity
                onPress={ this.props.onPress }
                style = { this.styles.capture }
            >
                { this.showButtonContent() }
            </TouchableOpacity>
        );
    }
}
export default FullScreenPreviewImageButton;