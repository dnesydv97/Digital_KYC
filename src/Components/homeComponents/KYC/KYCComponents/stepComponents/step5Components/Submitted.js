import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../Components/homeComponents/KYC/KYCSteps';

import step2Styles from '../Components/homeComponents/KYC/KYCComponents/stepComponents/step2Components/Step2.styles';

const Step4 = (props) => {
  return (
    <View style={{marginTop: 7, marginLeft: 10, marginRight: 15}}>
      <Image
        style={{marginTop: 20, width: 200, marginLeft: 70}}
        source={require('../assets/starter4.png')}
      />

      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 5,
          fontSize: 20,
          textAlign: 'center',
          justifyContent: 'center',
          marginBottom: 5,
        }}>
        Congratulation!
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 5,
          fontSize: 14,
          textAlign: 'center',
          justifyContent: 'center',
          marginBottom: 5,
        }}>
        Your application has been submitted.
      </Text>
      <Text style={{
        
          marginTop: 5,
          fontSize: 14,
          textAlign: 'center',
          justifyContent: 'center',
          marginBottom: 5,
        }}>
        Please wait to hear back from our representatives.Mean while make sure
        you have following documents in hand to present:
      </Text>

      <Text style={{
        
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        fontWeight: 'bold',
      }}>
      1. CitizenShip
      </Text>
      <Text style={{
        
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        fontWeight: 'bold',
      }}>
      2. Electricity Bill
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      <TouchableOpacity style={{
  marginTop:50,
    borderRadius: 100,
    padding: 10,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#dfa00a',
    borderWidth: 2,
    marginRight:10
  }} onPress={props.prev}>
          <Text style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 17}}>
            Get back to profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
           marginTop:50,
   backgroundColor: '#dfa00a',
  borderRadius: 100,
  padding: 10,
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '#dfa00a',
  borderWidth: 2,
 
}} onPress={props.next}>
          <Text style={{color: 'white', fontSize: 15}}>
            Go back to homepage
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step4;
