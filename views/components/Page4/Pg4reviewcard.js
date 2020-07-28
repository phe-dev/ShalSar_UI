import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground, Animated, ScrollView, QRCode} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Pg4reviewcard() {
  return (

    <View style={styles.container}>
        <View style={styles.headingcontainer}>

            <View style={styles.profile}>
            <ImageBackground source={require('../../../assets/backgroundimage/userprofile.jpg')} style = {styles.userprofile}>
            </ImageBackground>
            </View>
            <View style={styles.name}>
              <Text style={styles.textname}>Liam William</Text>
            </View>

        </View>
        <View style={styles.photocontainer}>

            <ImageBackground source={require('../../../assets/backgroundimage/contentphoto.jpg')} style = {styles.contentphoto}>
            </ImageBackground>

        </View>
        <View style={styles.contentcontainer}>
              <Text style={styles.contenttext}>Lorem Ipsum is simply dummy text of the printing
                                              and typesetting industry. Lorem Ipsum has been
                                              the industry’s standard dummy text ever since the
                                              1500s,
              </Text>

        </View>
        <View style={styles.line} />
        <View style={styles.reactioncontainer}>

          <Ripple style={styles.reactbutton}>
            <View style={styles.reactflex1}>
              <Icon style={styles.icon} name="favorite-border" size={20} color="#121212"/>
            </View>
            <View style={styles.reactflex2}>
                <Text style={styles.reactioncount}>132</Text>
            </View>
          </Ripple>




        </View>
    </View>


  );

}
export default Pg4reviewcard ;

const styles = StyleSheet.create ({

   container:
   {
     backgroundColor:'#fff',
     alignItems:'center',
     width:'100%',
     height:'auto',
     marginBottom:10,


   },
   headingcontainer:
   {
     flexDirection:'row',
     width:'95%',

     height:65,

   },
   profile:
   {
      alignItems:'flex-start',
      justifyContent:'center',
      flex:1,
   },
   name:
   {
     justifyContent:'center',
     flex:6.5,

   },
   userprofile:
   {
     width:35,
     height:35,
     borderRadius:50,
     overflow:'hidden',

   },
   textname:
   {
     fontSize:18,
   },
   photocontainer:
   {
     width:'95%',
     alignItems:'center',
     justifyContent:'center',

   },
   contentphoto:
   {
     width:'100%',
     height:'auto',
     minHeight: 285,
     maxHeight: 500,

   },
   contentcontainer:
   {

     height:'auto',
     width:'95%',
     alignItems:'flex-start',
     justifyContent:'flex-start',

   },
   contenttext:
   {
     fontSize:14,
     marginTop:15,
     marginBottom:20,
   },
   line:
   {
     backgroundColor: '#EEEEEE',
     height: 1,
     width: '95%',
   },
   reactioncontainer:
   {

     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     height:55,

   },
   reactbutton:
   {
     alignItems:'flex-start',
     justifyContent:'flex-start',
     height:'100%',
     width:55,
     flexDirection:'row',
   },
   reactflex1:{
      flex:1,
      height:'100%',
      justifyContent:'center',

   },
   reactflex2:{
      flex:1,
      height:'100%',
      alignItems:'flex-end',
      justifyContent:'center',

   },
   reactioncount:
   {
     fontSize:16,
     color:'#121212',
   }

})
