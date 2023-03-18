import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconFinger from 'react-native-vector-icons/MaterialIcons';
import Hr from 'react-native-hr-component';
import EyeIcon from 'react-native-vector-icons/Entypo';

// export const EmailInput = (props) => {
//   return (
//     <TextInput
//       keyboardType="email-address"
//       style={styles.input}
//       onChangeText={props.handleChange}
//       onBlur={props.handleBlur}
//     />
//   );
// };

export const PasswordVisibility = (props) => {

  return (
    
      <TouchableOpacity
        style={{position: 'absolute', right: 10}}
        onPress={props.passwordVisibility}>
        <EyeIcon
          name={props.hide ? 'eye-with-line' : 'eye'}
          size={15}
          style={{
            opacity: 0.3,
            color: '#001370',
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
  );
};

export const LoginIcons = () => {
  return (
    <View style={styles.icons}>
      <Icons name="facebook-f" style={{color: '#001370'}} size={15} />
      <Icons name="google" size={15} style={{color: '#001370'}} />
      <Icons name="envelope" style={{color: '#001370'}} size={15} />
    </View>
  );
};

export const Fingerprint = () => {
  return (
    <TouchableOpacity style={styles.fingerprint}>
      <View style={{flexDirection: 'row'}}>
        <IconFinger
          style={{color: '#001370', marginRight: 10}}
          size={20}
          name="fingerprint"
        />
        <Text>Tap to login with fingerprint</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Alternative = (props) => {
  return (
    <Text style={styles.noAccount}>
      {props.text} <Text onPress={props.handleSubmit}> {props.action} </Text>
    </Text>
  );
};
export const Line = (props) => {
  return (
    <Hr
      lineColor="black"
      width={1}
      text={props.text}
      style={styles.loginwith}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    backgroundColor: '#dae1e7',
    marginBottom: 8,
    borderRadius: 5,
    padding: 8,
  },

  textBoxContainer: {
    justifyContent: 'center',
  },

  icons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginLeft: '37%',
    marginRight: '37%',
    marginBottom: '8%',
  },

  fingerprint: {
    marginTop: -10,
    alignItems: 'center',
    marginBottom: 30,
  },

  noAccount: {
    textAlign: 'center',
    marginBottom: 30,
  },
});
