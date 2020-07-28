import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground, Animated, ScrollView, QRCode} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeaturedCarddetail from './FeaturedCarddetail'

function FeaturedCard() {
  return (

    <View style={styles.container}>

        <View style={styles.card}>
        <ImageBackground source={require('../../../assets/backgroundimage/pizza.jpg')} style = {styles.background}>

          <View style={styles.box}>
              <FeaturedCarddetail/>
          </View>

        </ImageBackground>

        </View>
    </View>


  );

}
export default FeaturedCard ;

const styles = StyleSheet.create ({

   container:
   {

     backgroundColor:'#fff',
     alignItems:'center',

   },
   card:
   {
      marginLeft:10,
      borderRadius:10,
      width:246,
      height:350,
   },
   background:
   {
     width:"100%",
     height:"100%",
     overflow:'hidden',
     borderRadius:10,
     borderWidth:0,
     justifyContent:'flex-end',
   },
   box:
   {
     marginBottom:8,
   }


})
