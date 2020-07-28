import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import Pg3restaurantcarddetail from './Pg3restaurantcarddetail'
import Pg3promotionbar from './Pg3promotionbar'

function Pg3restaurantcard() {
  return (

    <View style= {styles.container}>
        <View style={styles.card}>

          <ImageBackground source={require('../../../assets/backgroundimage/noodle.jpg')} style = {styles.background}>

            <View style={styles.box}>
                <Pg3restaurantcarddetail/>
            </View>

          </ImageBackground>







        </View>

    </View>

  );

}
export default Pg3restaurantcard   ;


const styles = StyleSheet.create ({

   container: {

    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
   },
   background:
   {

     width:'100%',
     height:320,
     overflow:'hidden',
     borderRadius:10,
     justifyContent:'flex-end',


   },
   card:
   {
     justifyContent:'center',
     alignItems: 'center',
     borderRadius:10,
      flexDirection:'column',
      width:'95%',
      maxWidth:375,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,


    },




})
