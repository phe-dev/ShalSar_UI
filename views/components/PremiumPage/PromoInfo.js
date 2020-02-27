import React,{ useState }from 'react';
import { TouchableOpacity, StyleSheet, Text , View,TextInput} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';

function PromoInfo() {

  return (

    <View style= {styles.container}>
            <View style= {styles.layer}>
                <View style= {styles.flex1}>
                        <View style= {styles.f1sec1}>
                        <Icon style={styles.icon} name="block" size={24} color="#212121"/>


                        </View>
                        <View style= {styles.f1sec2}>
                          <Text style={styles.text}>No more ads</Text>

                        </View>

                </View>
                <View style= {styles.flex2}>
                       <View style= {styles.f1sec1}>

                       <Icon style={styles.icon} name="loyalty" size={24} color="#212121"/>

                        </View>
                        <View style= {styles.f1sec2}>
                        <Text style={styles.text}>Unlimited discounts</Text>


                        </View>

                </View>
                <View style= {styles.flex3}>
                        <View style= {styles.f1sec1}>

                        <Icon style={styles.icon} name="group" size={24} color="#212121"/>

                        </View>
                        <View style= {styles.f1sec2}>
                        <Text style={styles.text}>Access shared features</Text>


                        </View>

                </View>

            </View>

    </View>


  );

}
export default PromoInfo ;


const styles = StyleSheet.create ({

   container: {

    zIndex:1,
    alignItems: 'center',
   },
   layer:
   {
      justifyContent:'space-between',
      width:"88%",
      height:210,
   },
   text:
   {
      fontSize:18,
      fontWeight:'bold',
   },

   flex1:
   {
     flexDirection:'row',
      backgroundColor:'#f5f5f5',
      height:65,
      borderRadius:18,
   },
   flex2:
   {
     flexDirection:'row',
      backgroundColor:'#f5f5f5',
      height:65,
      borderRadius:18,

   },
   flex3:
   {
     flexDirection:'row',
      backgroundColor:'#f5f5f5',
      height:65,
      borderRadius:18,

   },
   f1sec1:
   {
     alignItems:'center',
      flex:1,
      justifyContent:'center',
   },
   f1sec2:
   {
     flex:4,
     justifyContent:'center',

   },

})
