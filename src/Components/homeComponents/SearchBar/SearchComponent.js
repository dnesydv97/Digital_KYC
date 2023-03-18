import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from "./SearchComponent.styles";

const SearchComponent = () => {
    return (
        <View style = {{display: 'flex', flexDirection: 'row',}}>
            <View style = {{flex: 2}}>
                <TextInput 
                style = {styles.searchbar}
                placeholder = 'Enter Customer Id or Email address'
                />
            </View>
            <View style = {styles.searchme}>
                <Text style = {{fontSize: 16, color: '#fff'}}>Search me</Text>
            </View>
        </View>
    )
}


export default SearchComponent
