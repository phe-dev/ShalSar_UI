import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground, Animated, ScrollView, QRCode} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeaturedCarddetail from './FeaturedCarddetail'
import FeaturedCard from './FeaturedCard'


function Scrollablemenucard() {
  return (

    <View style={styles.container}>

    <View style={styles.box1}>

    <Text style={styles.subtext}>For You</Text>

    </View>


    <ScrollView
    style={styles.box2}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
    <View style={{marginLeft:6}}/>
    <FeaturedCard/>
    <FeaturedCard/>
    <FeaturedCard/>
    <FeaturedCard/>
    <View style={{marginRight:16}}/>
    </ScrollView>





    </View>


  );

}
export default Scrollablemenucard ;

const styles = StyleSheet.create ({

   container:
   {
     backgroundColor:'#fff',
     alignItems:'center',
     flexDirection:'column',

   },
   box1:
   {
     width:'100%',
     height:30,

   },
   box2:
   {

     width:'100%',

   },
   subtext:
   {
     fontSize:14,
     marginLeft:16,
     color:'#757575',
   }



})
