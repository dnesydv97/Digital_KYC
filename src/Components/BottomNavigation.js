import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import ListIconIcon from 'react-native-vector-icons/MaterialIcons'
import CalendarIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsIcon from 'react-native-vector-icons/Ionicons'
import Dashboard from '../screens/Dashboard';

const Tab = createMaterialBottomTabNavigator();

export default function ButtomNavigation(props) {
  return (
      <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle={{ backgroundColor: '#001370' }}
      >
      <Tab.Screen
        name="Forms"
        component={props.forms}
        options={{
            tabBarLabel: 'Forms',
            tabBarIcon: () => (
                <ListIconIcon name="list-alt" color= 'white' size={26} />
                ),
            }}
      />
      <Tab.Screen
        name="Schedule"
        component={props.schedule}
        options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: () => (
                <CalendarIcon name="calendar-month-outline" color= 'white' size={26} />
                ),
            }}
      />
      
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon name="home" color= 'white' size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={props.profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon name="user-o" color= 'white' size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={props.settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <SettingsIcon name="settings-outline" color= 'white' size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
