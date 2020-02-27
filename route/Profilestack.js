import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ProfileScreen from '../presenters-screens/ProfileScreen';
import PremiumonboardingScreen from '../presenters-screens/PremiumonboardingScreen';






//////////tab navigation

const screens = {
  screen1:{
    screen:ProfileScreen,
    navigationOptions:
    {
      headerShown: false,
    },
  },
  screen2:{
    screen:PremiumonboardingScreen,
    navigationOptions:
    {
      headerShown: false,
    },
  },



}


const Profilestack = createStackNavigator(screens);


export default createAppContainer(Profilestack);
