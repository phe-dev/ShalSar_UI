import React , {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import RestaurantsScreen from '../presenters-screens/RestaurantsScreen';
import CategoryScreen from '../presenters-screens/CategoryScreen';
import ResultScreen from '../presenters-screens/ResultScreen';
import DetailrestaurantScreen from '../presenters-screens/DetailrestaurantScreen';





//////////tab navigation

const screens = {
  screen1:{
    screen:RestaurantsScreen
  },
  DetailScreen:
  {
    screen : DetailrestaurantScreen,
    navigationOptions:
    {
      headerShown: false,
      cardStyle:{
        backgroundColor:'#fff',
      }

    },



  },
  screen2:{
    screen:CategoryScreen
  },
  ResultScreen:
  {
    screen:ResultScreen

  },




}


const Restaurantstack = createStackNavigator(screens);


export default createAppContainer(Restaurantstack);
