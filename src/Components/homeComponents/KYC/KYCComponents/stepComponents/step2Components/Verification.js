
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,TextInput
} from 'react-native';

const Starter5 = ({navigation}) => {

        // const handleSubmit = () => {
        //     navigation.navigate('Dashboard')
        // }
    
        // const handleSkip = () => {
        //     navigation.navigate('Dashboard')
        // }

  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
     
       
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../assets/verification.png')}
          />

          <Text style={styles.signupText}>Verification Code</Text>
          <Text style={styles.signupText1}>
            {' '}
            Please enter verification code sent to you via email
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter pin"
            keyboardType="numeric"
            maxLength={4}
          />
          <TouchableOpacity
            style={styles.button}
             onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          <Pressable
           onPress={() => handleSkip()}
          >
            <Text style={styles.pressableText}>Resend</Text>
          </Pressable>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  

  logo: {
    marginTop: '15%',
    marginLeft: 65,
  },

  signupText: {
    color: 'black',
    marginTop: '5%',
    fontSize: 17,
   
  },
  signupText1: {
    color: 'black',
    marginTop: 5,
    fontSize: 17,
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginLeft: 10,
    marginRight:10
  },

  button: {
    backgroundColor: '#DFA00A',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    marginBottom: 5,
    marginTop:70
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  pressableText: {
    fontWeight: 'bold',
    marginTop: '3%',
  },

  buttomImage: {
    position: 'absolute',
    left: '-40%',
    bottom: '-40%',
  },
});

export default Starter5;
