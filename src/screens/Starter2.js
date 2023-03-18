import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'

const Starter2 = ({navigation}) => {
    const handleSubmit = () => {
        navigation.navigate('Starter3')
        
    }

    const handleSkip = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <View style = {styles.container}>
            <Image 
                style={styles.logoText}
                source = {require('../assets/logo.png')}

            />
            <Image 
            style = {styles.image}
            source = {require('../assets/satrter2.png')}
            />
            <Text style = {styles.text}>Choose account type and add details</Text>
            <TouchableOpacity
            style = {styles.button}
            onPress = {() => handleSubmit()}
            >
                <Text style = {styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <Pressable
            onPress = {() => handleSkip()}
            >
                <Text style = {styles.pressableText}>Skip</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logoText: {
        marginTop: '20%',
        marginBottom: '12%'
    },

    image: {

    },

    text: {
        fontWeight: 'bold',
        color: '#181515',
        marginTop: '18%',
        marginBottom: '28%',
        fontSize:18
    },

    button: {
        backgroundColor: "#001370",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '80%',
        marginBottom: '3%'
    },

    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"
    },

    pressableText: {
        fontWeight: 'bold'
    },
})

export default Starter2
