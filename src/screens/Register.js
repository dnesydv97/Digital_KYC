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
  KeyboardAvoidingView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';

import * as authAction from '../redux/actions/authAction';
import {Alternative} from '../Components/Signin';
import {PasswordVisibility} from '../Components/Signin';
import {Line} from '../Components/Signin';
import SuccessModal from '../Components/Modal';

const Register = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');

  const setPasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const setConfirmPasswordVisibility = () => {
    setHideConfirmPassword(!hideConfirmPassword);
  };

  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid.')
      .required('The Email field is required.'),
    username: Yup.string()
      .min(2, 'Username must me at least 2 characters.')
      .required('The Username field is required.'),
    password: Yup.string()
      .min(6, 'The Password must be at least 6 characters long.')
      .required('The Password field is required.')
      .matches(
        /^(?=.*[a-z])/,
        "Passwords must have at least one lowercase ('a'-'z').",
      )
      .matches(
        /^(?=.*[A-Z])/,
        "Passwords must have at least one uppercase ('A'-'Z').",
      )
      .matches(
        /^(?=.*[0-9])/,
        "Passwords must have at least one digit ('0'-'9')",
      )
      .matches(
        /^(?=.*[#?!@$%^&*-])/,
        'Passwords must have at least one non letter or digit character.',
      ),
    confirmPassword: Yup.string()
      .required('The password and confirmation password do not match.')
      .oneOf(
        [Yup.ref('password'), null],
        'The password and confirmation password do not match.',
      ),
  });
  const handleSubmit = () => {
    navigation.navigate('Login');
  };
  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding": "height"} 
        style={{ flex: 1 }}>
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{marginTop: 18, marginBottom: 23}}
          source={require('../assets/logo.png')}
        />

        <Text style={{fontWeight: 'bold', marginBottom: 35}}>
          Create new account
        </Text>
      </View>

      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          setEmailError('');
          setError('');

          const authData = {
            email: values.email,
            username: values.username,
            password: values.password,
            confirmPassword: values.confirmPassword
          }

          dispatch(authAction.registerUser(authData))
            .then(function (res) {
              console.log(JSON.stringify(res.data));
              navigation.navigate('Dashboard');
            })
            .catch(function (error) {
              if (error['response']['data']['ModelState']['']) {
                setEmailError(error['response']['data']['ModelState'][''][1]);
              } else {
                setError('something went wrong');
                console.log(error.response.data);
              }
            });
        }}
        validationSchema={LoginSchema}>
        {(props) => (
          <View style={styles.container1}>
            <View style={styles.form}>
              <Text
                style={
                  props.touched.email && props.errors.email
                    ? styles.invalidText
                    : styles.text
                }>
                Email
              </Text>
              <TextInput
                keyboardType="email-address"
                returnKeyType="next"
                returnKeyLabel="next"
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                style={
                  props.touched.email && props.errors.email
                    ? styles.invalidInput
                    : styles.input
                }
              />
              {props.touched.email && props.errors.email ? (
                <Text style={{color: '#cf3838'}}>{props.errors.email}</Text>
              ) : null}
              {emailError ? (
                <Text style={{color: '#cf3838'}}>{emailError}</Text>
              ) : null}
              <Text
                style={
                  props.touched.username && props.errors.username
                    ? styles.invalidText
                    : styles.text
                }>
                Username
              </Text>
              <TextInput
                returnKeyType="next"
                returnKeyLabel="next"
                onChangeText={props.handleChange('username')}
                onBlur={props.handleBlur('username')}
                style={
                  props.touched.username && props.errors.username
                    ? styles.invalidInput
                    : styles.input
                }
              />
              {props.touched.username && props.errors.username ? (
                <Text style={{color: '#cf3838'}}>{props.errors.username}</Text>
              ) : null}
              <Text
                style={
                  props.touched.password && props.errors.password
                    ? styles.invalidText
                    : styles.text
                }>
                Password
              </Text>

              <View style={styles.textBoxContainer}>
                <TextInput
                  secureTextEntry={hidePassword}
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  style={
                    props.touched.password && props.errors.password
                      ? styles.invalidInput
                      : styles.input
                  }
                />

                <PasswordVisibility
                  hide={hidePassword}
                  passwordVisibility={setPasswordVisibility}
                />
              </View>
              {props.touched.password && props.errors.password ? (
                <Text style={{color: '#cf3838'}}>{props.errors.password}</Text>
              ) : null}
              <Text
                style={
                  props.touched.confirmPassword && props.errors.confirmPassword
                    ? styles.invalidText
                    : styles.text
                }>
                Confirm password
              </Text>
              <View style={styles.textBoxContainer}>
                <TextInput
                  secureTextEntry={hideConfirmPassword}
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onChangeText={props.handleChange('confirmPassword')}
                  onBlur={props.handleBlur('confirmPassword')}
                  style={
                    props.touched.confirmPassword &&
                    props.errors.confirmPassword
                      ? styles.invalidInput
                      : styles.input
                  }
                />
                <PasswordVisibility
                  hide={hideConfirmPassword}
                  passwordVisibility={setConfirmPasswordVisibility}
                />
              </View>
              {props.touched.confirmPassword && props.errors.confirmPassword ? (
                <Text style={{color: '#cf3838'}}>
                  {props.errors.confirmPassword}
                </Text>
              ) : null}
              {error ? <Text style={{color: '#cf3838'}}>{error}</Text> : null}
              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>

              <SuccessModal
                visibility={isModalVisible}
                dashboard={goToDashboard}
              />

              <Line text="Or signup with" />
            </View>
            <View style={styles.icons}>
              <Icon name="facebook-f" style={{color: '#001370'}} size={15} />
              <Icon name="google" size={15} style={{color: '#001370'}} />
              <Icon name="envelope" style={{color: '#001370'}} size={15} />
            </View>
          </View>
        )}
      </Formik>
      <Alternative
        text="Already have an account?"
        handleSubmit={handleSubmit}
        action="Login"
      />
    </ScrollView>
    </KeyboardAvoidingView>
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

  text: {
    color: 'black',
    marginBottom: 6,
  },

  invalidText: {
    color: '#cf3838',
    marginBottom: 6,
  },

  input: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    height: 45,
    backgroundColor: '#dae1e7',
    marginBottom: 8,
    borderColor: '#dae1e7',
  },

  invalidInput: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    height: 45,
    backgroundColor: '#dae1e7',
    marginBottom: 8,
    borderColor: '#cf3838',
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

  icons: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginLeft: '37%',
    marginRight: '37%',
    marginBottom: '8%',
  },

  textBoxContainer: {
    justifyContent: 'center',
  },

  haveAccount: {
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default Register;
