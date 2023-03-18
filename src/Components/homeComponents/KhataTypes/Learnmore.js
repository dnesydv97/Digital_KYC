import React, {useState} from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  color,
  ScrollView,
} from 'react-native';
import PlaneIcon from 'react-native-vector-icons/Ionicons';
import KnowMoreIcon from 'react-native-vector-icons/Foundation';
import Khata from '../Components/homeComponents/KhataTypes/Khata';
import KYCSteps from '../Components/homeComponents/KYC/KYCSteps';
import Individual from '../Components/homeComponents/individualBox/Individual';
const confirm = (navigate) => {
  const [screen, setScreen] = useState('home');
  const KYC = () => {
    setScreen('KYCSteps');
  };
  return (
    <View style={styles.Container}>
     <View> 
  
     
     <Image
       source={require('../assets/featureImg.png')}
        style={styles.Image}
     />
   </View>
  
     <View style={{flexDirection: 'row',marginTop:20,marginLeft:30}}>
       <Text style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 14,marginTop:2}}>
         Jestha Nagarik bachat khata
       </Text>
       <TouchableOpacity
         style={{
           backgroundColor: '#dfa00a',
           borderRadius: 50,
           padding: 3,
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center',
          marginRight:20,
           marginLeft: 40,
           flex:3
         }}>
         <PlaneIcon
           name="paper-plane-outline"
           size={15}
           color="white"
           style={{paddingRight: 2}}>
           {' '}
         </PlaneIcon>
         <Text style={{color: 'white', fontWeight: 'bold'}}>Apply</Text>
       </TouchableOpacity>
     </View>
  

   <View>
   <ScrollView>
     <Text style={{marginRight: 15, marginLeft: 30,marginTop:15}}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
       eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     
     </Text> 
     </ScrollView>
    
    </View> 
  
 </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default confirm;