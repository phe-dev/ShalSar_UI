import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { BlurView } from 'expo-blur';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import Pg3promotionbar from './Pg3promotionbar'



function Pg3restaurantcarddetail() {
  return (


        <View style={styles.container}>
            <View style={styles.detailcard}>
                  <View style={styles.box2}>
                        <View style={styles.box2flex1}>
                            <Text style={styles.headertext}>Beauty in the pot</Text>

                        </View>
                        <View style={styles.box2flex2}>

                        <Text style={styles.subtext}>8 miles</Text>

                        </View>

                  </View>
                  <View style={styles.box3}>
                        <Icon style={styles.icon} name="bookmark-outline" size={24} color="#121212"/>
                  </View>

            </View>
        </View>


  );

}
export default Pg3restaurantcarddetail;


const styles = StyleSheet.create ({
  container: {

    justifyContent:'center',
    alignItems:'center',


  },
  detailcard:
  {

    backgroundColor:'#fff',
    flexDirection:'row',
    height:80,
    borderWidth:0,

  },
  box1:
  {
    marginLeft:15,
    justifyContent:'center',
    flex:1,

  },
  box2:
  {
    marginLeft:15,
    justifyContent:'center',
    flex:4,


  },
  box2flex1:
  {
    flex:1,
    marginBottom:2,
    justifyContent:'flex-end',



  },
  box2flex2:
  {

    flex:1,
    marginTop:2,
    justifyContent:'flex-start',




  },
  box3:
  {
    alignItems:'flex-end',
    marginRight:11,
    justifyContent:'center',
    flex:1,

  },


  background:
  {

    borderRadius:100,
    overflow:'hidden',
    width:45,
    height:45,
  },
   headertext:
   {
     fontWeight:'bold',
      fontSize:16,
      color:'#121212',
   },
   subtext:
   {

      fontSize:14,
      color:'#757575',
   },



})
