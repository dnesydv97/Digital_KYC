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
     
       <ScrollView>
       
        <Individual />
        <Khata KYCSteps={KYC} />
     
      </ScrollView>
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
