import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import colors from '../../../../styles/Colors';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import styles from '../KYCSteps.styles';
import Step1 from './stepComponents/Step1';
import Step2 from './stepComponents/Step2';
import Step3 from './stepComponents/Step3';
import Step4 from './stepComponents/Step4';
import Step5 from './stepComponents/Step5';

const StepInfo = (props) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const labels = [
    'Info',
    'Costumer Details',
    'Address & employment',
    'Declaration',
    'VKYC',
  ];

  const getStepIndicatorIconConfig = ({position, stepStatus}) => {
    switch (position) {
      case 0: {
        return (
          <Icon1
            name="information"
            size={20}
            color={
              stepStatus === 'finished'
                ? '#ffffff'
                : stepStatus === 'current'
                ? '#ffffff'
                : colors.dark
            }
          />
        );
        break;
      }
      case 1: {
        return (
          <Icon2
            name="user"
            size={20}
            color={
              stepStatus === 'finished'
                ? '#ffffff'
                : stepStatus === 'current'
                ? '#ffffff'
                : colors.dark
            }
          />
        );
        break;
      }
      case 2: {
        return (
          <Icon1
            name="location-sharp"
            size={20}
            color={
              stepStatus === 'finished'
                ? '#ffffff'
                : stepStatus === 'current'
                ? '#ffffff'
                : colors.dark
            }
          />
        );
        break;
      }
      case 3: {
        return (
          <Icon2
            name="file-text"
            size={20}
            color={
              stepStatus === 'finished'
                ? '#ffffff'
                : stepStatus === 'current'
                ? '#ffffff'
                : colors.dark
            }
          />
        );
        break;
      }
      case 4: {
        return (
          <Icon2
            name="file-text"
            size={20}
            color={
              stepStatus === 'finished'
                ? '#ffffff'
                : stepStatus === 'current'
                ? '#ffffff'
                : colors.dark
            }
          />
        );
        break;
      }
      default: {
        break;
      }
    }
  };

  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };
  const prevStep = () => {
    setCurrentPosition(currentPosition - 1);
  };
   const NewStep = () => {
    setCurrentPosition(currentPosition + 6);
  };
  const customStyles = {
    stepIndicatorSize: 37,
    currentStepIndicatorSize: 37,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#dfa00a',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#6fcf38',
    stepStrokeUnFinishedColor: '#dae1e7',
    separatorFinishedColor: '#6fcf38',
    separatorUnFinishedColor: '#dae1e7',
    stepIndicatorFinishedColor: '#6fcf38',
    stepIndicatorUnFinishedColor: '#dae1e7',
    stepIndicatorCurrentColor: '#dfa00a',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#ffffff',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'black',
    labelColor: 'black',
    labelSize: 13,
    currentStepLabelColor: '#dfa00a',
  };
  return (
    <View style={{marginTop: 10}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={5}
        renderStepIndicator={getStepIndicatorIconConfig}
      />
      <View style={{display: 'flex', margin: 10}}>
        {currentPosition == 0 ? (
          <Step1 next={nextStep} />
        ) : currentPosition == 1 ? (
          <Step2 formData={props.formData} next={nextStep} prev={prevStep} NewStep = {NewStep} />
        ) : currentPosition == 2 ? (
          <Step3 formData={props.formData}  next={nextStep} prev={prevStep} />
        ) : currentPosition == 3 ? (
          <Step4 formData={props.formData} next={nextStep} prev={prevStep} />
        ) : (
          <Step5 formData={props.formData} schedule={props.schedule} prev={prevStep} />
        )}
      </View>
    </View>
  );
};

export default StepInfo;
