import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/MaterialIcons';
import Pg3promotionbar from './Pg3promotionbar'


function Pg3restaurantcarddetail() {
  return (


        <View style={styles.layer}>
                <View style={styles.box1}>
                    <Text style={styles.subheading}>Golden Duck</Text>
                </View>
                <View style={styles.box2}>

                </View>
                <View style={styles.box3}>
                      <View style={styles.b3flex1}>
                            <View style={styles.b3f1div1}>
                                <Text style={styles.text}>Location</Text>

                            </View>
                            <View style={styles.b3f1div2}>
                                <Text style={styles.text}>8 miles</Text>

                            </View>
                      </View>
                      <View style={styles.b3flex2}>
                            <View style={styles.b3f2div1}>
                                <Text style={styles.text}>Minimum Dining</Text>
                            </View>
                            <View style={styles.b3f2div2}>
                                <Text style={styles.text}>35000MMK</Text>
                            </View>
                      </View>
                      <View style={styles.b3flex3}>
                            <View style={styles.b3f3div1}>
                                <Text style={styles.text}>Number of time visited</Text>
                            </View>
                            <View style={styles.b3f3div2}>
                                <Text style={styles.text}>3</Text>
                            </View>
                      </View>
                </View>

                <View style={styles.box4}>
                    <Pg3promotionbar/>
                </View>
        </View>


  );

}
export default Pg3restaurantcarddetail;


const styles = StyleSheet.create ({

   subheading:
   {
      fontWeight:'bold',
      fontSize:24,
   },

   layer:
   {

     flexDirection:'column',
     width:277,
     height:210,



   },
   box1:
   {
     justifyContent:'flex-end',
    flex:2,

   },
   box2:
   {
      flex:1,


   },
   box3:
   {
      flexDirection:'column',
      flex:5,


   },
   b3flex1:
   {
     flexDirection:'row',
      flex:1,

   },
       b3f1div1:
       {
          flex:2,



       },
       b3f1div2:
       {
         flex:1,


       },
   b3flex2:
   {
     flexDirection:'row',
      flex:1,

   },
       b3f2div1:
       {
          flex:2,



       },
       b3f2div2:
       {
         flex:1,



       },
   b3flex3:
   {
     flexDirection:'row',
      flex:1,

   },
       b3f3div1:
       {
          flex:2,



       },
       b3f3div2:
       {
         flex:1,



       },
 box4:
 {
   justifyContent:'flex-start',

       flexDirection:'column',
    flex:2,



 },



})