import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const MoreAccountTypes = (props) => {
    return (
        <View style = {styles.box} >
            <TouchableOpacity
             style = {{justifyContent: 'center',
            alignItems: 'center'}}
            onPress = {props.KYC}>
            <Text style = {{fontSize: 12, color: 'white', fontWeight: '700'}}>See more</Text>
            <Icon name = 'arrowright' size = {30} color = 'white' /> 
            </TouchableOpacity>
               
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        backgroundColor: '#dfa00a',
        borderRadius: 4,
        paddingBottom: 10,
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
        marginLeft: 20, 
        marginRight: 20,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default MoreAccountTypes
