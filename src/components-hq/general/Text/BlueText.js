import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
    Content,
    Button,
    Icon,
    Left,
    Body,
    Spinner,
    Card,
    CardItem,
    Text,
    Image
} from "native-base";
class Reservation extends Component {
    constructor(props){
        super(props);
        this.styles = styles;
        this.state = {
            selected1: "key1",
            isDateTimePickerVisible: false,
            date: '',
            time: '20:00',
            datetime: '2016-05-05 20:00',
            datetime1: '2016-05-05 20:00',
            checked1: false,
            checked2: false
        };
    }
    componentWillMount(){
    
    }
    render() {
        if (false) {
            return <Spinner />;
        } else {
            return (
                <Content>
                    <Card style={ this.styles.cardStyle }>
                        <CardItem bordered>
                            <Left>
                                <Body>
                                    <CardItem header bordered>
                                        <View style={ this.styles.dateTimeTitleWrapper }>
                                            <Text style={ this.styles.cardTitle }>Date & Time</Text>
                                        </View>
                                    </CardItem>
                                    <View style={{ flex:1, flexDirection: 'column' } }>
                                        <View>
                                            <Text style={ { color: '#4272a8' } }>Test Text</Text>
                                            <Text style={ { color: '#4272a8' } } note>Brand: Miguel Cars Services</Text>
                                        </View>
                                        <View style={{ flex:1, flexDirection: 'row' }}>
                                            <View style={{ flex:1, flexDirection: 'column' }}>
                                                <Text style={ this.styles.blueText } note>Pickup Date: 22-05-2018</Text>
                                                <Text style={ { color: '#4272a8' } } note>Pickup Time: 21:22</Text>
                                                <Text style={ { color: '#4272a8' } } note>Pickup Location: Office</Text>
                                            </View>
                                            <View style={{ flex:1, flexDirection: 'column' }}>
                                                <Text style={ { color: '#4272a8' } } note>Return Date: 26-05-2018</Text>
                                                <Text style={ { color: '#4272a8' } } note>Return Time: 21:22</Text>
                                                <Text style={ { color: '#4272a8' } } note>Return Location: Airport</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem header bordered>
                            <Text style={ { fontSize: 16, color: '#4272a8' } }>Economic Manual</Text>
                        </CardItem>
                        <CardItem bordered>
                            <View style={ { flex:1, flexDirection: 'row' } }>
                                <View style={ { flex:1 } }>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            type="FontAwesome"
                                            name='car'
                                            style={{ color: "#4272a8" }}
                                        />
                                        <Text>Manual Transmision</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            type="Entypo"
                                            name='air'
                                            style={{ color: "#4272a8" }}
                                        />
                                        <Text>Air Conditioning</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            type="FontAwesome"
                                            name='music'
                                            style={{ color: "#4272a8" }}
                                        />
                                        <Text>Radio/CD Player</Text>
                                    </View>
                                </View>
                                <View style={ { flex:1 } }>
                                    <Text>$23.00 / Day</Text>
                                    <Text>$92.00 total for 4 days</Text>
                                    <Text>Excl. taxes & insurance(s)</Text>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <View>
                                <Text>gdfgdfgdfg</Text>
                            </View>
                            <View style={ { flex:1, flexDirection:'row', paddingLeft:10, paddingRight:10, justifyContent: 'center' } }>
                                <Image source={{uri: 'https://files.caagcrm.com/tenants/d501d680-647f-4219-9337-d5e96a712078/files/f9c55c2d-5698-41fb-82a0-21f6906f1b3b/redirect/1526001141/timestamp?size=1000'}} style={{height: 200, width: 200, flex: 1}} />
                            </View>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header bordered>
                            <View style={ { flex:1, alignItems: 'center' } }>
                                <Text style={ this.styles.cardTitle }>Reservation Summary</Text>
                            </View>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Button small primary>
                                    <Text>Completed</Text>
                                </Button>
                                <View style={ { flex:1, flexDirection:'column' } }>
                                    <View style={ { flex:1, alignItems: 'flex-start'} }>
                                        <Text style={ this.styles.summaryTitle }>Economic Manual</Text>
                                    </View>
                                    <View style={ { flex:1, alignItems: 'flex-end', flexDirection: 'row', alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                                        <View style={ { flex: 1, flexDirection: 'row', alignItems: 'flex-end' } }>
                                            <Text style={ { flex: 1, textAlign: 'left' } }>4 x Daily Price ($23.00)</Text>
                                            <Text style={ { flex: 1, textAlign: 'right' } }>$92.00</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={ { flex:1, flexDirection:'column' } }>
                                    <View style={ { flex:1, alignItems: 'flex-start'} }>
                                        <Text style={ { fontSize: 16, color: '#4272a8' } }>Total</Text>
                                    </View>
                                    <View style={ { flex:1, alignItems: 'flex-end', flexDirection: 'row', alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                                        <View style={ { flex: 1, flexDirection: 'row', alignItems: 'flex-end' } }>
                                            <Text style={ { flex: 1, textAlign: 'left' } }>fsdfsfsd</Text>
                                            <Text style={ { flex: 1, textAlign: 'right', fontSize: 20 } }>$125.44</Text>
                                        </View>
                                    </View>
                                </View>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            );
        }
    }
}

const styles = {
    dashBoardButtons: {
        flex:1,
        flexDirection: 'row'
    },
    cardTitle: {
        textAlign: 'center',
        fontSize:20
    },
    cardStyle: {
        flex: 0
    },
    rowView:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    columnsView:{
        flex:1,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    tabsStyles: {
        flex: 1,
        textAlign: 'center'
    },
    summaryTitle: {
        fontSize: 16,
        color: '#4272a8'
    },
    datePickerStyle:{
        flex: 1,
        borderWidth: 0,
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    dateTimeTitleWrapper: {
        flex:1,
        alignItems: 'center'
    },
    blueText: {
        color: '#4272a8'
    }
};

export default Reservation;
