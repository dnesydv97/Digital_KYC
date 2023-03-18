import React, {useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListIcon from 'react-native-vector-icons/MaterialIcons';
import CalendarIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsIcon from 'react-native-vector-icons/Ionicons';
import Forms from './Forms';
import Schedule from './Schedule';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const Tab = createMaterialBottomTabNavigator();

export default function Dashboard({navigation}) {
  const [state, setState] = useState('Home')
  const KYC = () => {
    navigation.navigate('KYCSteps');
  };

  const goToForms = () => <Forms />;
  const goToSchedule = () => <Schedule />;

  const goToHome = () => <Home schedule = {() => setState('Schedule')}/>;

  const goToProfile = () => <Profile />;
  const goToSettings = () => <Settings />;
  return (
    <Tab.Navigator
      initialRouteName="Home" 
      inactiveColor="#fff"
      // activeColor="#FF0000"
      labelStyle={{fontSize: 15}}
      barStyle={{backgroundColor: '#001370'}}>
      <Tab.Screen
        name="Forms"
        component={goToForms}
        options={{
          shifting: 'true',
          tabBarLabel: 'Forms',
          // tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <ListIcon name="list-alt" color="white" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={goToSchedule}
        options={{
          tabBarLabel: 'Schedule',
          // tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <CalendarIcon
              name="calendar-month-outline"
              color="white"
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={goToHome}
        options={{
          tabBarLabel: 'Home',
          // tabBarColor: '#694fad',
          tabBarIcon: ({color}) =>( <Icon name="home" color="white" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={goToProfile}
        options={{
          // tabBarColor: '#d02860',
          tabBarLabel: 'Profile',
          
          tabBarIcon: () => (<Icon name="user-o" color="white" size={26} />)
        }}
      />
      <Tab.Screen
        name="Settings"
        component={goToSettings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <SettingsIcon name="settings-outline" color="white" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
