import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'

const Starter4 = ({navigation}) => {
    const handleSubmit = () => {
        navigation.navigate('Dashboard')
        
    }

    const handleSkip = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <View style = {styles.container}>
            <Image 
            source={require('../assets/Path251.png')}
            style = {styles.pathImg}
            />
            <Image 
                style={styles.logoText}
                source = {require('../assets/logo.png')}

            />
            <Image 
            source = {require('../assets/starter4.png')}
            />
            <Text style = {styles.text}>Open online account staying home</Text>
            <TouchableOpacity
            style = {styles.button}
            onPress = {() => handleSubmit()}
            >
                <Text style = {styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <Pressable
            onPress = {() => handleSubmit()}
            >
                <Text style = {styles.pressableText}>Skip</Text>
            </Pressable>
            <Image 
            style = {styles.image}
            source = {require('../assets/Path253.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    pathImg: {
        top: '-18%',
        right: '45%'
    },

    logoText: {
        top: '-15%',
        marginBottom: '-12%'
    },

    image: {
        position: 'absolute',
        zIndex: 1,
        left: '25%',
        bottom: -260
    },

    text: {
        fontWeight: 'bold',
        color: '#181515',
        marginTop: '15%',
        marginBottom: '16%',
        fontSize:17
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
        fontWeight: 'bold',
        position: 'relative',
        zIndex: 2,
    },
})

export default Starter4
