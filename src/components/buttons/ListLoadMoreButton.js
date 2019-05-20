import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { listLoadMoreButtonStyles as styles } from "./styles";

class ListLoadMoreButton extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    onPressButton(){
        this.props.onPressLoadMore();
    }
    render(){
        return(
            <TouchableOpacity
                onPress={ this.onPressButton.bind(this) }
                style={ this.styles.reservationListWrapper }
            >
                <View style={ { flex:8, justifyContent: 'center' } }>
                    <Text style={ this.styles.plateTextStyle }>Load More</Text>
                </View>
                <View style={ { flex: 2 } }>
                    <View style={ { flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 } }>
                        <Text style={ this.styles.ammountTextStyle }></Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}
export default ListLoadMoreButton;