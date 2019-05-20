import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Image} from 'react-native';
class HQModal extends Component {
    constructor(props){
        super(props);
    }
    state = {
        modalVisible: false,
    };
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    
    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>
                            <Image source={ {uri: this.props.photoImage } } style={ this.styles.imageStyle } />
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
const style = {
    imageStyle: {
        flex:1,
        flexDirection: 'row'
    }
};
export default HQModal;
