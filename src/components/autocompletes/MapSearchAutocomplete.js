import React, { Component } from "react";
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { mapSearchAutocompleteStyles as styles } from "./styles";
import Autocomplete from 'react-native-autocomplete-input';
import AutocompleteItem from './AutocompleteItem';
import {Icon, Item} from "native-base";
import SearchBarInput from "../inputs/SearchBarInput";


class MapSearchAutocomplete extends Component{
    constructor(props){
        super(props);
        this.styles = styles;
    }
    renderItem(item){
        return(
            <AutocompleteItem
                label={ item.description }
                keyboardShouldPersistTaps='always'
                onPress={ this.props.mapScreenSetSelectedPlace.bind(this,item, this.props.hideResults) }
            />
        );
    }
    renderTextInput(componentProps){
        return(
            <Item style={this.styles.itemWrapperStyle}>
                <Icon name="ios-search" style={this.styles.iconStyle}/>
                <SearchBarInput
                    placeholder={ this.props.searchInputPlaceholder }
                    searchInputValue={ this.props.searchInputValue }
                    onChangeText={ this.props.onChangeText.bind(this) }
                    onBlur={ this.props.onBlur.bind(this) }
                />
                <TouchableOpacity onPress={ this.props.onPressCleanSuggestions }>
                    <Icon type="Ionicons" name="ios-close-circle-outline" style={ this.styles.rightIconStyle }/>
                </TouchableOpacity>
            </Item>
        );
    }
    render(){
        return(
            <View style={ this.styles.autocompleteWrapper }>
                <Autocomplete
                    containerStyle={ this.styles.autocompleteContainerStyle }
                    hideResults={ this.props.hideResults }
                    data={ this.props.data }
                    renderItem={ this.renderItem.bind(this) }
                    listContainerStyle={ this.styles.listContainerStyles }
                    listStyle={ this.styles.listStyle }
                    inputContainerStyle={ this.styles.inputContainerStyle }
                    renderTextInput={ this.renderTextInput.bind(this) }
                />
            </View>
        );
    }
}
export default MapSearchAutocomplete;
