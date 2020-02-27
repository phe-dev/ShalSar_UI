import React , {Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView ,ImageBackground} from 'react-native';

import PromoInfo from '../views/components/PremiumPage/PromoInfo'

import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';




export default function PremiumonboardingScreen ({navigation})
{
    const goback= () => {
      navigation.goBack();
    }
    return (

      <View style={styles.container}>
      <SafeAreaView style={styles.container}>

                <View style={styles.box1}>

                  <View style={styles.b1flex1}>
                  </View>
                  <View style={styles.b1flex2}>

                          <Ripple style = {styles.closebutton} onPress={goback} >

                          <Icon style={styles.icon} name="close" size={24} color="#d63031"/>

                          </Ripple>


                  </View>

                  </View>



                  <View style={styles.body}>
                      <View style={styles.flex1}>
                              <ImageBackground source={require('../assets/backgroundimage/premium.jpg')} style = {styles.background}>
                              </ImageBackground>
                      </View>
                      <View style={styles.flex2}>
                          <Text style={styles.heading}>Upgrade to Premium</Text>
                      </View>
                      <View style={styles.flex3}>
                          <PromoInfo/>
                      </View>
                      <View style={styles.flex4}>
                            <Ripple style = {styles.premiumbutton}>
                              <Text style={styles.premiumbtn}>Get Started</Text>
                            </Ripple>
                      </View>
                  </View>

        </SafeAreaView>

      </View>






    );

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',

  },
  heading:
  {
      fontSize:24,
      fontWeight:'bold',
  },
  background:
  {

    alignItems:'center',
    justifyContent:'center',
    width:"100%",
    height:"100%",

  },
  closebutton: {
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center',
  borderRadius:50,
   width: 45,
   height:45,
   backgroundColor: '#f5f5f5',

  },
  icon:
  {
    alignItems:'center',
    justifyContent:'center',



  },
  premiumbutton: {
    alignItems:'center',
    justifyContent:'center',
   overflow: 'hidden',
   width:'88%',
   height:50,
   backgroundColor:'#FFC107',
   borderRadius:10,

  },
  premiumbtn:
  {
    fontWeight:'bold',
    color:'#212121',

  },
  box1:
  {
    flexDirection:'row',
    height:67,


  },
                b1flex1:
                {
                  marginLeft:19,
                  flex:2,
                  justifyContent:'center',


                },
                b1flex2:
                {
                  marginRight:19,
                  flex:1,

                  alignItems:'flex-end',
                  justifyContent:'center',


                },

  body:
  {
    flex:1,

  },
  flex1:
  {
      flex:4,
      marginBottom:10,
  },
  flex2:
  {
      justifyContent:'center',
      alignItems:'center',
      flex:1,
  },
  flex3:
  {
      justifyContent:'center',
      flex:4,

  },
  flex4:
  {

      alignItems:'center',
      flex:1,

  },




});
