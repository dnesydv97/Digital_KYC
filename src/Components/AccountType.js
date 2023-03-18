import React, {useState, useEffect, useCallback} from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

const AccountType = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState()
    const onLayout = useCallback(
        ({
          nativeEvent: {
            layout: { width }
          }
        }) => {
            setWidth(width);
        },
        []
      );

    return (
        <View onLayout={onLayout} style = {styles.box} >
            <View style = {styles.content}>
            <Image 
                source = {require('../assets/acc_type.png')}
                style = {{marginBottom: 3}}
                resizeMode = 'contain'

            />

                <Text style = {{fontSize: 10}}>Nari bachat khata</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderRadius: 4,
        margin: 15,
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
        paddingBottom: 10,
        flexWrap: 'wrap',
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default AccountType
