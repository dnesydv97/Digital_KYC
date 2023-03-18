import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../KYCSteps.styles';
import step2Styles from './step2Components/Step2.styles';
import AccountSummary from './step5Components/AccountSummary';
import Camera from './step5Components/Camera';
import ScheduleCalendar from './step5Components/ScheduleCalendar';
import axios from 'axios';
import FamilyDetails from './step2Components/FamilyDetails'
import Token from './../../../../../utils/token';
import CustomerRegistrationInfo from './../../../../../utils/customerRegistrationInfo';
import IdentificationDetails from './step2Components/IdentificationDetails'
import EmploymentDetails from './step3Components/EmploymentDetails'
import CorrespondanceAdd from './step3Components/CorrespondanceAdd'

const Step5 = (props) => {
  const [state, setState] = useState('Step 5');
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    const data = props.formData.getData();

    console.log('Form data in step 5:', data);

    const token = Token.token;

    if (!token) {
      console.log('Error while submitting data. No TOKEN');
      Alert.alert('NO TOKEN');

      return;
    }

    var config = {
      method: 'post',
      url:
        'http://onlineaccountopening.westus.cloudapp.azure.com:8172/api/customerregistration/OmniChannelCustomerRegistration',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        Cookie:
          '.AspNet.ApplicationCookie=l6V_yMdpxh0Ngdee1LYi8yYm5zJZ-WTOIJkO9H5cz7IWNFC05Gg6zmKKzxl0LJcnQ0Il1LJVBiv5LOmw2qDV5Ae5TevRgmzL6kcrJOUk1T-ebkejAhtbUSV9rsZn5khtKFx9jWmswIo_pkQNI5lKt2gtk2OqdQfb6gtEXXJ7KEVqe3V8rhtvXURVWgDYByCtLSQA8AhSed2Vn7gIdafj2q4Fh9tlOGw3zkdRI7c8abv8cG0SeKyt5CBSu7mJs3fnRY0RbBUrSQILTEpyUtlfo1r5ns3VBjwWSUpjx_rr8wsiMajwVYuNlzuyWBwoHtoPvGQb-2cTorcetr-X0a6Zdv2EIDCbiospcTmR2xCD0jYd3VmXVkAZJnimi2WuDgNkA8b_fWjpygOrdRmw3IIxSTfXCYf-yMRZbWhua2eGnt1eWJ1awgmXMAr3kmU-uBmS79R4ZhzIjRDfIkdRFGZHm0pvdZoAjgzM1_ErOsLAvY8uvPiI8f2GEBAc14cQgsN2uLEcNo6I0UJW0qADgnM-2XE0oi-eksZB98MqYJFFFQ8rING3fnZz911lH6V3Rpkcq0JDrunpskggY4r7NPP1Bg',
      },
      data: JSON.stringify(data),
    };

    axios(config)
      .then(function (response) {
        const {CustomerRegistrationId, CustomerName} = response.data;
        console.log(JSON.stringify(data));
        Alert.alert('Form sucessfully filled');

        CustomerRegistrationInfo.state = response.data;

        setUserDetail({
          CustomerRegistrationId,
          CustomerName,
        });
      })
      .catch(function (error) {
        console.log('Error while submitting data');
        console.dir(error);

        Alert.alert('There was and error in the form');
      });
  }, [props.formData, setUserDetail]);

  return (
    <View>
      {state === 'Step 5' ? (
        <View style={{marginTop: 7, marginLeft: 15, marginRight: 15}}>
          <AccountSummary />
          <FamilyDetails />
          <IdentificationDetails />
          <EmploymentDetails />

          <CorrespondanceAdd />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={step2Styles.prevBtn}
              onPress={() => setState('Record')}>
              <Text
                style={{color: '#dfa00a', fontWeight: 'bold', fontSize: 16}}>
                Record Meeting
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={step2Styles.nextBtn}
              onPress={() => setState('Schedule')}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Schedule Meeting
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : state === 'Record' ? (
        <Camera />
      ) : (
        <ScheduleCalendar userDetail={userDetail} />
      )}
    </View>
  );
};

export default Step5;
