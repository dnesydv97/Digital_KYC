import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import CamIcon from 'react-native-vector-icons/Ionicons'

const ScheduleMeetingBox = (props) => {
    return (

            <View style = {styles.box}>
                <View style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                <View style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'}}
                >
                    <View style = {{
                        backgroundColor: '#dfa00a',
                        alignItems: 'center', 
                        width: 130, 
                        height: 110, 
                        justifyContent: 'space-around', 
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5
                    }}>
                        <Icon name = {'calendar'} size = {60} color = 'white' style = {styles.schedule} />
                        
                    </View>
                    <View style = {{
                        backgroundColor: '#001370', 
                        width: 130, 
                        height: 40,
                        justifyContent: 'center', 
                        alignItems: 'center',
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5
                        }}>
                        <Text style = {{ color: 'white'}}>Schedule meeting</Text>
                    </View>
                    
                </View>
                <View style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'}}
                >
                    <View style = {{
                        backgroundColor: '#dfa00a',
                        alignItems: 'center', 
                        width: 130, 
                        height: 110, 
                        justifyContent: 'space-around', 
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5
                    }}>
                        <CamIcon name = {'videocam'} size = {60} color = 'white' style = {styles.schedule} />
                        
                    </View>
                    <View style = {{
                        backgroundColor: '#001370', 
                        width: 130, 
                        height: 40,
                        justifyContent: 'center', 
                        alignItems: 'center',
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5
                        }}>
                        <Text style = {{ color: 'white'}}>Video Meeting</Text>
                    </View>
                    
                </View>
                
            </View>
            
        </View>
    
        
    )
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10,
        margin: 15,
        justifyContent: 'space-around'
    },
})

export default ScheduleMeetingBox
