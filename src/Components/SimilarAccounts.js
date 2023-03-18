import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import PlaneIcon from 'react-native-vector-icons/Ionicons';
import KnowMoreIcon from 'react-native-vector-icons/Foundation';

const SimilarAccounts = () => {
    return (
        <View style = {styles.box} >
            <Image
            />
            <Text style = {{paddingRight: 10}}>Image here</Text>
            <View style = {{flexDirection: 'column', flex: 1}}>
                <Text style = {{color: '#dfa00a', fontWeight: 'bold', fontSize: 15}}>
                    Babu Nani Khata
                </Text>
                <Text style = {{marginBottom: 7}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Text>
                <View style = {{flexDirection: 'row', marginBottom: 7, justifyContent: 'flex-end', marginRight: 18}}>
                    <TouchableOpacity
                    style = {{backgroundColor: '#dfa00a', borderRadius: 3, padding: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: '15%'}}
                    >
                        <PlaneIcon name = 'paper-plane-outline' size = {15} color = 'white' style = {{paddingRight: 2}}> </PlaneIcon>
                        <Text style = {{color: 'white', fontWeight: 'bold'}}>Apply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {{backgroundColor: '#dfa00a', borderRadius: 3, padding: 4, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <KnowMoreIcon name = 'info' size = {22} color = 'white' style = {{paddingRight: 2}}> </KnowMoreIcon>
                        <Text style = {{color: 'white', fontWeight: 'bold'}}>Know More</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection:'row',
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 0,
        margin: 15,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
    },
})

export default SimilarAccounts
