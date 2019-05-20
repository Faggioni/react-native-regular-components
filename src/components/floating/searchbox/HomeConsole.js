import React, { Component } from "react";
import {
    View
} from 'react-native';
import HomeConsoleButton from '../../buttons/HomeConsoleButton';
import { homeConsoleStyles as styles } from "./styles";
import HomeConsoleSearchBox from '../../searches/HomeConsoleSearchBox';
class HomeConsole extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    render(){
        return(
            <View style={ this.styles.homeControlWrapper }>
                <View style={ this.styles.homeControlInnerWrapper }>
                    <HomeConsoleSearchBox
                        onChangeText={ () => console.log('okis') }
                    />
                    <View style={ this.styles.buttonWrapper }>
                        <HomeConsoleButton
                            rightBorder={true}
                            type="MaterialCommunityIcons"
                            name='magnify'
                        />
                        <HomeConsoleButton
                            rightBorder={true}
                            type="MaterialCommunityIcons"
                            name='tune'
                        />
                        <HomeConsoleButton
                            rightBorder={true}
                            type="MaterialCommunityIcons"
                            name='chart-pie'
                        />
                        <HomeConsoleButton
                            type="MaterialCommunityIcons"
                            name='apple-safari'
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default HomeConsole;
