import React, { Component } from "react";
import { View, Modal } from "react-native";

import {
    Text,
    Button,
} from "native-base";
import styles from './styles';
const commonColor = require("../../theme/variables/commonColor");

class ModalBox extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (

                <Modal
                    animationType="slide"
                    transparent={ false }
                    visible={ this.props.modalVisibility }
                    onRequestClose={ alert('modal close') }>
                    <View style={ styles.space }>
                        <Text
                            style={{
                                color: commonColor.inverseTextColor,
                                marginBottom: 10
                            }}
                        >
                            { this.props.title }
                        </Text>
                        <Button rounded onPress={ () => { this.props.onButtonPress } }>
                            <Text style={{ color: commonColor.textColor }}>
                                { this.props.closeButtonText }
                            </Text>
                        </Button>
                    </View>
                </Modal>
        );
    }
}
export default ModalBox;
