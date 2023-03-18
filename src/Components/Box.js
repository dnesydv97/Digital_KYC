import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Box = () => {
    return (
        <View style = {styles.box}>
            <View style = {styles.nextMeeting}>
                <Text 
                style = {{ fontWeight: '300', fontSize: 18}}
                adjustsFontSizeToFit>Next Meeting
                </Text>
                <Text style = {{fontSize: 13, bottom: -2}}>23rd January 2021, Thursday, 2:30 pm</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{color: '#001370', fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>23</Text>
                    <Text style = {{color: '#001370'}}>Days</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{fontSize: 20, color: '#001370'}}>23</Text>
                    <Text style = {{color: '#001370'}}>Hours</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{color: '#001370', fontSize: 20}}>23</Text>
                    <Text style = {{color: '#001370'}}>Minutes</Text>
                </View>
                <View style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {{color: '#001370', fontSize: 20}}>23</Text>
                    <Text style = {{color: '#001370'}}>Second</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10,
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
    nextMeeting: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap'
    },
})

export default Box
