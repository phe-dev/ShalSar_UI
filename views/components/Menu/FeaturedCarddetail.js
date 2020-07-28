import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground, Animated, ScrollView, QRCode} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlurView } from 'expo-blur';


function FeaturedCarddetail() {
  return (

    <View style={styles.container}>

    <BlurView intensity={100} tint={'default'} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]} style={styles.detailcard}>

          <View style={styles.box2}>
                <View style={styles.box2flex1}>
                    <Text style={styles.text}>Bubble Tea Pizza</Text>

                </View>
                <View style={styles.box2flex2}>

                <Text style={styles.text}>15,500 MMK</Text>

                </View>

          </View>


    </BlurView>

    </View>


  );

}
export default FeaturedCarddetail ;

const styles = StyleSheet.create ({

   container:
   {

     alignItems:'center',

   },
   detailcard:
   {

     flexDirection:'row',
     height:75,
     borderRadius:10,
     borderWidth:0,
     width:'92%',
   },
   box1:
   {
     marginLeft:11,
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
     marginBottom:4,
     justifyContent:'flex-end',



   },
   box2flex2:
   {

     flex:1,
     marginTop:4,
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
    text:
    {
       fontSize:14,
       color:'#fff',
    },



})
