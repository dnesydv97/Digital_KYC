import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../KYCSteps.styles';
import step1Styles from './Step1.styles'
import colors from '../../../../../../styles/Colors'

const Button = ({onPress, selected, children}) => {
  return (
    <View style={step1Styles.checkBoxContainer}>
      <TouchableOpacity onPress={onPress} style = {{marginRight: 12}}>
        {selected ? (
          <CheckBox name="checkbox-marked" size={25} color = {colors.primary}/>
        ) : (
          <CheckBox name="checkbox-blank-outline" size={25} color = {colors.primary} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.descriptionText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
