import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground, Animated, ScrollView, QRCode} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MenuCard from './MenuCard'
import FeaturedCard from './FeaturedCard'


function MenuList() {
  return (

    <View style={styles.container}>

    <View style={styles.box1}>

    <Text style={styles.subtext}>You may also like</Text>

    </View>

    <ScrollView style={styles.scrollcontainer}>

        <MenuCard/>
        <MenuCard/>
        <MenuCard/>



    </ScrollView>


    </View>


  );

}
export default MenuList ;

const styles = StyleSheet.create ({

   container:
   {
     marginTop:15,
     backgroundColor:'#fff',
     alignItems:'center',
     flexDirection:'column',

   },
   box1:
   {
     width:'100%',
     height:30,
   },
   scrollcontainer:
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
