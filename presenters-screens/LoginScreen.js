import React , {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Pg1btnLoginwithfacebook from '../views/components/Page1/Pg1btnLoginwithfacebook'
import Pg1txtShalsar from '../views/components/Page1/Pg1txtShalsar'
import Pg1Backgroundimage from '../views/components/Page1/Pg1Backgroundimage'
import Pg2profile from '../views/components/Page2/Pg2profile'
import Pg2txtprofilename from '../views/components/Page2/Pg2txtprofilename'
import Pg2txtsavedamount from '../views/components/Page2/Pg2txtsavedamount'
import Pg2energyleftindicator from '../views/components/Page2/Pg2energyleftindicator'
import Pg2mostvisitedrestaurant from '../views/components/Page2/Pg2mostvisitedrestaurant'
import Pg3restaurantcard from '../views/components/Page3/Pg3restaurantcard'
import Pg3restaurantcarddetail from '../views/components/Page3/Pg3restaurantcarddetail'
import MenuCard from '../views/components/Menu/MenuCard'
import FeaturedCarddetail from '../views/components/Menu/FeaturedCarddetail'
import MenuList from '../views/components/Menu/MenuList'
import Pg4reviewcard from '../views/components/Page4/Pg4reviewcard'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Parallax from 'react-native-scroll-view-parallax'

LoginScreen.navigationOptions={

  headerShown: false,
  cardStyle:{
    backgroundColor:'#fff',
  }
}


export default function LoginScreen ({navigation})
{
    return (

    <MenuList/>


    );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  background:
  {
    justifyContent:'flex-end',
    width:'100%',
    height:'100%',
  },
  card:
  {
    backgroundColor:'#fff',
    width:'100%',
    height:150,
  }
});
