import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  LogBox
} from 'react-native';
import StepInfo from './KYCComponents/StepIndicator';

const KYCSteps = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  return (
    <ScrollView>
      <StepInfo formData={props.formData} schedule = {props.schedule}/>
    </ScrollView>
  );
};

export default KYCSteps;
