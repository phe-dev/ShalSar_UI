import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground, Animated, ScrollView, QRCode} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FeaturedCard from './FeaturedCard'


function MenuCard() {
  return (

    <View style={styles.container}>

        <View style={styles.card}>

              <View style={styles.box1}>
                  <ImageBackground source={require('../../../assets/backgroundimage/drink.jpg')} style = {styles.background}>
                  </ImageBackground>
              </View>
              <View style={styles.box2}>
                  <View style={styles.box2flex1}>
                      <Text style={styles.text}>Soft Drink</Text>

                  </View>
                  <View style={styles.box2flex2}>

                  <Text style={styles.text}>5,500 MMK</Text>

                  </View>
              </View>




        </View>



    </View>


  );

}
export default MenuCard ;

const styles = StyleSheet.create ({

   container:
   {
     backgroundColor:'#fff',
     alignItems:'center',
     flexDirection:'column',

   },
   card:
   {
     backgroundColor:'#f5f5f5',
     borderRadius:8,
     width:'91%',
     height:100,
     flexDirection:'row',
     marginBottom:6,

   },
   background:
   {
     width:80,
     height:80,
     borderRadius:5,
     overflow:'hidden',
   },
   box1:
   {
      flex:2,
      alignItems:'center',
      justifyContent:'center',
   },
   box2:
   {


     justifyContent:'center',
     flex:4,


   },
   box2flex1:
   {
     flex:1,
     marginBottom:4,
     justifyContent:'flex-end',



   },
   box2flex2:
   {

     flex:1,
     marginTop:4,
     justifyContent:'flex-start',




   },




})
