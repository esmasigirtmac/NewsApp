

import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import {CustomHeader, CustomDrawerContent} from './src'
import {HomeScreen, SettingsScreen} from './src/tab'
import {ProfilScreen} from './src/drawer'
import {RegisterScreen, LoginScreen} from './src/auth'
import {IMAGE} from './src/constants/Image'
import React, {useEffect, useRef,useState} from 'react';


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator()

function HomeStack({navigation, route}) {
  if (route.state && route.state.routeNames[route.state.index] === "HomeDetail" ) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator()

function SettingStack({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <StackSetting.Navigator initialRouteName="World">
      <StackSetting.Screen name="World" component={SettingsScreen} options={navOptionHandler}/>
    
    </StackSetting.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? IMAGE.ICON_HOME
                : IMAGE.ICON_HOME_BLACK;
            } else if (route.name === 'World') {
              iconName = focused ? 
              IMAGE.ICON_SETTINGS 
              : IMAGE.ICON_SETTINGS_BLACK;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: 20, height: 20}} 
            resizeMode="contain"/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="World" component={SettingStack} />
      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Haberler" 
      drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
        <Drawer.Screen name="Haberler" component={TabNavigator} />
        <Drawer.Screen name="Profil" component={ProfilScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator()

export default function App() {
  
  
  return (
    <NavigationContainer>
        <StackApp.Navigator initialRouteName="Login">
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
          <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
          <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
        </StackApp.Navigator>
    </NavigationContainer>
  );
}