import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';

const BankServices = () => {
    return (
        <View style = {{flexDirection: 'column', justifyContent: 'space-between', margin: 20}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name = 'credit-card' size = {25} color = '#001370'></Icon>
                    <Text style = {{marginTop: 10}}>Credit card</Text>
                </View>
            </View>
        </View>
        
    )
}

export default BankServices
