import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import {Buffer} from 'buffer';
global.Buffer = Buffer;
import {Provider} from 'react-redux';
import store from './redux/store';

import api from './Services/ApiServices';
import qs from 'qs';
import Token from './utils/token'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator();

import Starter1 from './screens/Starter1';
import Starter2 from './screens/Starter2';
import Starter3 from './screens/Starter3';
import Starter4 from './screens/Starter4';

import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';

const App = () => {
  useEffect(() => {
    const data = qs.stringify({
      'Username': 'superadmin@digitalagenepal.com',
     'Password': 'Satellite@123456',
     'grant_type': 'password' 
     });
  
    const config = {
      method: 'POST',
      url: '/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache'
      },
      data: data,
    };
  

    api(config)
      .then(res => {
        // console.log('Token res:', res.data)
        Token.state = res.data;
      })
      .catch(function (error) {
        console.log(error.response.data.error_description);
        Alert.alert(error.response.data.error_description)
      });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Starter1">
          <Stack.Screen
            name="Starter1"
            options={{headerShown: false}}
            component={Starter1}
          />

          <Stack.Screen
            name="Starter2"
            options={{headerShown: false}}
            component={Starter2}
          />
          <Stack.Screen
            name="Starter3"
            options={{headerShown: false}}
            component={Starter3}
          />

          <Stack.Screen
            name="Starter4"
            options={{headerShown: false}}
            component={Starter4}
          />



          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />

          <Stack.Screen
            name="Register"
            options={{headerShown: false}}
            component={Register}
          />

          <Stack.Screen
            name="Dashboard"
            options={{
              headerShown: true,
              title: 'Digital KYC',
              headerLeft: null,
             
               
              headerStyle: {
                backgroundColor: '#001370',
               
              },
              headerTintColor: '#fff',
           
              headerTitleStyle: {
                fontSize: 15,
               marginLeft: 125,
                fontWeight: '900',
                
              },
             
              headerRight: () => (
                <Icon
                  name={'bell'}
                  size={25}
                  color="white"
                  style={{
                    marginRight: 10,
                  }}></Icon>
              ),
            }}
            component={Dashboard}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
