import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../Components/homeComponents/KYC/KYCSteps.styles';

import step2Styles from '../Components/homeComponents/KYC/KYCComponents/stepComponents/step2Components/Step2.styles';
import {ScrollView} from 'react-native-gesture-handler';
const Profile = () => {
  return (
    <ScrollView>
      <View
        style={{
          marginBottom: 50,
          marginTop: 2,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <View style={step2Styles.textContainer}>
          <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
            Customer Account Summary
          </Text>
        </View>
        <View style={step2Styles.detailsContainer}>
          <Text style={{fontSize: 20, marginBottom: 10, fontWeight: 'bold'}}>
            1. Personal Details
          </Text>
          <Text style={{fontSize: 18, marginBottom: 10}}>First Name</Text>
          <TextInput style={styles.textInputStyle} placeholder="First Name" />
          <Text style={styles.textInputTitle}>Middle Name</Text>
          <TextInput style={styles.textInputStyle} placeholder="Middle Name" />
          <Text style={styles.textInputTitle}>Last Name</Text>
          <View>
            <TextInput style={styles.textInputStyle} placeholder="Last Name" />
          </View>
          <Text style={styles.textInputTitle}>DOB</Text>
          <View>
            <TextInput style={styles.textInputStyle} placeholder="DOB" />
          </View>
          <Text style={styles.textInputTitle}>Gender</Text>
          <View>
            <TextInput style={styles.textInputStyle} placeholder="Gender" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
