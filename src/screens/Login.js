import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {LoginIcons} from '../Components/Signin';
import {Fingerprint} from '../Components/Signin';
import {Alternative} from '../Components/Signin';
import {Line} from '../Components/Signin';
import EyeIcon from 'react-native-vector-icons/Entypo';

import {Formik} from 'formik';
import * as Yup from 'yup';

import api from '../Services/ApiServices';
import qs from 'qs';

const Login = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('Register');
  };

  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState('')

  const setPasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{marginTop: 18, marginBottom: 23}}
          source={require('../assets/logo.png')}
        />
        <Text style={{fontWeight: 'bold', marginBottom: 35}}>
          Login to your account
        </Text>
        <Image
          style={{marginBottom: 18}}
          source={require('../assets/signin.png')}
        />
      </View>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          var data = qs.stringify({
            Username: values.email,
            Password: values.password,
            grant_type: 'password',
          });
        
          var config = {
            method: 'POST',
            url: '/token',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Cache-Control': 'no-cache'
            },
            data: data,
          };
        

          api(config)
            .then(function (res) {
              setEmail('');
              setPassword('');
              navigation.navigate('Dashboard');
            })
            .catch(function (error) {
              console.log(error.response.data.error_description);
              setError(error.response.data.error_description)
            });
        }}
        validationSchema={LoginSchema}>
        {(props) => (
          <View style={styles.container1}>
            <View style={styles.form}>
              <Text style={{marginBottom: 6}}>Username</Text>
              <TextInput
                keyboardType="email-address"
                style={styles.input}
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
              />
              <Text style={{marginBottom: 6}}>Password</Text>
              <View style={styles.textBoxContainer}>
                <TextInput
                  secureTextEntry={hidePassword}
                  style={styles.input}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 10}}
                  onPress={() => setPasswordVisibility()}>
                  <EyeIcon
                    name={hidePassword ? 'eye-with-line' : 'eye'}
                    size={15}
                    style={{
                      opacity: 0.3,
                      color: '#001370',
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              </View>
                    {error ? <Text style = {{color: '#cf3838'}}>{error}</Text> : null}
              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Fingerprint />

              <Line text = "Or login with"/>
            </View>
            <LoginIcons />
          </View>
        )}
      </Formik>
      
      <Alternative text = "Don't have an account?" handleSubmit={handleSubmit} action = 'Signup'/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container1: {
    display: 'flex',
  },

  input: {
    height: 45,
    backgroundColor: '#dae1e7',
    marginBottom: 8,
    borderRadius: 5,
    padding: 8,
  },

  invalidInput: {
    height: 40,
    backgroundColor: '#dae1e7',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#cf3838',
  },

  textBoxContainer: {
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#001370',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 30,
    marginTop: '12%',
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  form: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 38,
    marginRight: 38,
    marginBottom: 20,
  },
});

export default Login;
