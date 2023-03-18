import React from 'react';
import {View, Text} from 'react-native';
import step1Styles from './Step1.styles';

const ListInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginBottom: 100,
        marginTop: -20,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
      }}>
      <View style={step1Styles.servicesBox}>
        <Text style={step1Styles.bgText}>01</Text>
        <Text style={step1Styles.headingMedium}>Select Package</Text>
        <Text style={step1Styles.fadedText}>
          Select your choice of package and Open your account.
        </Text>
      </View>

      <View style={step1Styles.servicesBox}>
        <Text style={step1Styles.bgText}>02</Text>
        <Text style={step1Styles.headingMedium}>Register an Account</Text>
        <Text style={step1Styles.fadedText}>
          Registration is a must before Opening an Account Online.
        </Text>
      </View>
      <View style={step1Styles.servicesBox}>
        <Text style={step1Styles.bgText}>03</Text>
        <Text style={step1Styles.headingMedium}>Fill/ UpdateKYC Online</Text>
        <Text style={step1Styles.fadedText}>
          Enter and Fill all the necessary details in order to Open your
          Account.
        </Text>
      </View>
      <View style={step1Styles.servicesBox}>
        <Text style={step1Styles.bgText}>04</Text>
        <Text style={step1Styles.headingMedium}>
          Schedule or Record for Application
        </Text>
        <Text style={step1Styles.fadedText}>
          Enter and Fill all the necessary details in order to Open your
          Account.
        </Text>
      </View>
    </View>
  );
};

export default ListInfo;
