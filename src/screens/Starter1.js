import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'

const Starter1 = ({navigation}) => {

    const handleSubmit = () => {
        navigation.navigate('Starter2')
    }

    const handleSkip = () => {
        navigation.navigate('Dashboard')
    }

    return (
        <View>

            <Image 
            source={require('../assets/Path251.png')}
            style = {styles.topImage}
            />
            <View style = {styles.container}>
                <Image 
                style={styles.logo}
                source = {require('../assets/logo.png')}

            />

                <Image 
                style = {styles.centerImage}
                source = {require('../assets/starter1.png')}
                />

                <Text style = {styles.signupText}>Signup into the application</Text>

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

            
            <Image 
            style = {styles.buttomImage}
            source = {require('../assets/Path250.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    topImage: {
        position: 'relative',
        left: '45%',
        top: '-17%',
      

    },
    
    logo: {
        marginTop: '-27%',
        marginBottom: '15%'
        
    },

    signupText: {
        fontWeight: 'bold',
        color: '#181515',
        marginTop: '10%',
        marginBottom: 95,
        fontSize: 18,
        
    },

    button: {
        backgroundColor: "#001370",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '80%',
        marginBottom: 5
    },

    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"
    },

    pressableText: {
        fontWeight: 'bold',
        marginTop: '3%'
    },

    buttomImage: {
        position: 'absolute',
        left: '-40%',
        bottom: '-40%'
    },
})

export default Starter1
