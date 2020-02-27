import React , {Component} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';

import Pg1btnLoginwithfacebook from '../views/components/Page1/Pg1btnLoginwithfacebook'
import Pg1txtShalsar from '../views/components/Page1/Pg1txtShalsar'
import Pg1Backgroundimage from '../views/components/Page1/Pg1Backgroundimage'
import Pg2profile from '../views/components/Page2/Pg2profile'
import Pg2txtprofilename from '../views/components/Page2/Pg2txtprofilename'
import Pg2txtsavedamount from '../views/components/Page2/Pg2txtsavedamount'
import Pg2energyleftindicator from '../views/components/Page2/Pg2energyleftindicator'
import Pg2mostvisitedrestaurant from '../views/components/Page2/Pg2mostvisitedrestaurant'
import Pg2btnpremiumuser from '../views/components/Page2/Pg2btnpremiumuser'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ripple from 'react-native-material-ripple';
import  { useState, useEffect } from 'react';
import { Animated } from 'react-native';


const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}



export default function ProfileScreen ({navigation})
{
    const pressHandler= () => {
      navigation.navigate('screen2');
    }

    return (
<View style={{ flex: 1, }}>
<FadeInView style={styles.container}>
      <SafeAreaView style={styles.container}>
      <View style={styles.box1}>

              <View style={styles.b1flex1}>
              <Text style={styles.text}>Profile</Text>
              </View>
              <View style={styles.b1flex2}>
                <Pg2btnpremiumuser/>
              </View>

      </View>
            <ScrollView style={styles.scrollView}>

              <View style={styles.box2}>
                  <View style={styles.b2flex1}>
                    <Pg2profile/>

                  </View>
                  <View style={styles.b2flex2}>
                    <Pg2txtprofilename/>

                  </View>
              </View>
              <View style={styles.box3}>
                  <Pg2txtsavedamount/>
              </View>
              <View style={styles.premiumbtncontainer}>

                      <Ripple style = {styles.button} onPress={pressHandler}>
                        <Text style={styles.premiumbtn}>Get Premium</Text>
                      </Ripple>
              </View>
              <View style={styles.box4}>
                  <Pg2mostvisitedrestaurant/>
              </View>

            </ScrollView>
          </SafeAreaView>


          </FadeInView>
        </View>


    );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flexDirection:'column',
    flex:1,

  },
  button: {
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
  text:
  {

    fontSize:34,
    fontWeight:'bold',

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
  box2:
  {

    flexDirection:'column',
    height:285,




  },
  b2flex1:
  {

    alignItems: 'center',
    flex:4,



  },
  b2flex2:
  {
    flex:3,
    alignItems:'center',




  },
  box3 :
  {

    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    height:123,

  },
  premiumbtncontainer:
  {
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      height:91,
  },


});
