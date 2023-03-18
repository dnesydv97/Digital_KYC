import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput} from 'react-native';
import step2Styles from './Step2.styles';

const InputOTP = () => {
  let textInput = useRef(null);
  const lengthInput = 4;
  const [code, setCode] = useState('');
  useEffect(() => {
    textInput.focus();
  }, []);
  return (
    <View style = {{marginBottom: 20}}>
      <TextInput
        ref={(input) => (textInput = input)}
        value={code}
        onChangeText={(code) => {
          setCode(code);
        }}
        style = {{width: 0, height: 0}}
        maxLength={lengthInput}
        returnKeyType="done"
        keyboardType="numeric"
      />
      <View style={step2Styles.containerInput}>
        {Array(lengthInput)
          .fill()
          .map((data, index) => (
            <View 
            key = {index}
            style={step2Styles.cellView}>
              <Text
                style={step2Styles.cellText}
                onPress={() => textInput.focus()}>
                {code && code.length > 0 ? code[index] : ''}
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default InputOTP;
