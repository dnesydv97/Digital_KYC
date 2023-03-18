import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'

const Starter3 = ({navigation}) => {
    const handleSubmit = () => {
        navigation.navigate('Starter4')
        
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
            style = {styles.path}
            source = {require('../assets/Path250.png')}
            />
            <Image 
            style = {styles.image}
            source = {require('../assets/starter3.png')}
            />
            <Text style = {styles.textStyle}>Set virtual meeting or record video</Text>
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
        alignItems: 'center'
    },

    logoText: {
        marginTop: '15%',
        marginBottom: '15%'
    },

    path: {
        left: '-35%',
        top: '-3%',
        position: 'relative',
        zIndex: 1
    },

    image: {
        position: 'relative',
        zIndex: 2,
        top: '-19%',
    },

    textStyle: {
        marginTop: '-18%',
        fontWeight: 'bold',
        color: '#181515',
        marginBottom: '18%',
        fontSize:17
    },

    button: {
        backgroundColor: "#001370",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '80%',
        marginBottom: '3%',
        
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

export default Starter3
