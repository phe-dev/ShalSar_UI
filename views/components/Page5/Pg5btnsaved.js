import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Pg5btnsaved() {
  return (


    <View style={styles.container} >
        <Ripple style={styles.layer}>
                  <View style={styles.box1}>

                      <View style = {styles.button}>

                      <Icon style={styles.icon} name="bookmark" size={24} color="#212121"/>

                      </View>


                  </View>
                  <View style={styles.box2}>
                  <Text style = {styles.btntext}>Saved</Text>

                  </View>
        </Ripple>
    </View>





  );

}
export default Pg5btnsaved;


const styles = StyleSheet.create ({

   container: {

      justifyContent:'center',
      alignItems: 'center',
   },

   btntext:
   {
     fontSize:18,

     color:'#000',

   },
   layer:{

     height:75,
    flexDirection:'row',



   },
   box1:
   {
      alignItems:'center',
      justifyContent:'center',
      flex:1,



   },
   box2:
   {
      alignItems:'flex-start',
      justifyContent:'center',

      flex:3,
      borderBottomColor: '#eee',
      borderBottomWidth: 1,


   },
   button: {
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

     fontWeight:'bold',
     color:'#146CA3',

   },
})
