import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View} from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Pg2energyleftindicator from './Pg2energyleftindicator'

function Pg1txtsavedamount() {
  return (

    <View style= {styles.container}>
    <View style={styles.layer}>

        <View style={styles.box3}>
              <View style={styles.b3flex1}>
                <Text style= {styles.text}>Saved Amount from Discounts</Text>
              </View>
              <View style={styles.b3flex2}>
              <Text style= {styles.amounttext} >8000MMK</Text>
              </View>
        </View>
    </View>

    </View>

  );

}
export default Pg1txtsavedamount ;


const styles = StyleSheet.create ({

   container: {
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     borderBottomColor: '#eee',
     borderBottomWidth: 1,

   },
   layer:
   {


     flexDirection:'row',
     borderRadius:18,
     overflow:'hidden',
     width:"88%",
     height:80,
    backgroundColor:'#f5f5f5',
   },
  text:
  {

    color:'#000',
    fontSize:76,

  },

  box3:
  {
    flex:100,


  },
  b3flex1:
  {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginTop:22,


  },
  b3flex2:
  {
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    marginBottom:22,


  },
  text:
  {
    fontSize:14,
  },
  amounttext:
  {
     color:'#146CA3',
     fontWeight:'bold',
   },



})
