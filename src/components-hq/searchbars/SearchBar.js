import React, { Component } from 'react';
import { Header, Item, Input, Icon } from 'native-base';
/*
 * Styles
 */
import { searchBarStyles as styles } from "./styles";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.styles = styles;
    }
    onChangeText(newValue){
        this.props.onChangeSearchInput(newValue);
    }
    render() {
        return (
            <Header searchBar rounded>
                <Item  style={this.styles.itemStyle}>
                    <Icon name="ios-search" />
                    <Input
                        style={ this.styles.inputStyle }
                        placeholder="Search"
                        value={ this.props.searchInputValue }
                        onChangeText={ this.onChangeText.bind(this) }
                        rounded
                    />
                    <Icon name="ios-people" color={ this.styles.iconColor } />
                </Item>
            </Header>
        );
    }
}
export default SearchBar;