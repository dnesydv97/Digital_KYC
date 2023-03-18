import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../../../../../styles/Colors';
import CheckBox from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../KYCSteps.styles';
import step2Styles from '../step2Components/Step2.styles';

const AccountServices = (props) => {
  const [debitcrad, setDebitCard] = useState(false);
  const [MobileBanking, setMobileBanking] = useState(false);
  const [InternetBanking, setInternetBanking] = useState(false);
  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [icon3, setIcon3] = useState(false);

  const handlePress1 = () => {
    setDebitCard(!debitcrad);
    setIcon1(!icon1);
    setMobileBanking(false);
    setIcon2(false);
    setInternetBanking(false);
    setIcon3(false);
  };
  const handlePress2 = () => {
    setDebitCard(false);
    setIcon1(false);
    setMobileBanking(!MobileBanking);
    setIcon2(!icon2);
    setInternetBanking(false);
    setIcon3(false);
  };
  const handlePress3 = () => {
    setDebitCard(false);
    setIcon1(false);
    setMobileBanking(false);
    setIcon2(false);
    setInternetBanking(!InternetBanking);
    setIcon3(!icon3);
  };

  useEffect(() => {
    if (debitcrad) {
      props.formData.addData({ServiceType: 'Debit cards'});
    } else if (MobileBanking) {
      props.formData.addData({ServiceType: 'Mobile Banking'});
    } else if (InternetBanking) {
      props.formData.addData({ServiceType: 'Internet Banking'});
    }
  }, [props.formData, debitcrad, MobileBanking, InternetBanking]);

  return (
    <View style={step2Styles.detailsContainer}>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            paddingLeft: 0,
          }}
          onPress={() => handlePress1()}>
          <CheckBox
            name={icon1 === true ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={25}
            color={colors.primary}
          />
          <Text style={styles.descriptionText}>Debit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            paddingLeft: 0,
          }}
          onPress={() => handlePress2()}>
          <CheckBox
            name={icon2 === true ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={25}
            color={colors.primary}
          />
          <Text style={styles.descriptionText}>Mobile Banking Service</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8,
            paddingLeft: 0,
          }}
          onPress={() => handlePress3()}>
          <CheckBox
            name={icon3 === true ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={25}
            color={colors.primary}
          />
          <Text style={styles.descriptionText}>Internet Banking Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountServices;
