import React from 'react';
import { TouchableOpacity, StyleSheet, Text , View, ImageBackground, Animated, ScrollView, QRCode,SafeAreaView,SwipeHiddenHeader,Dimensions,FadeInView } from 'react-native';
import { Button } from 'react-native'
import Ripple from 'react-native-material-ripple';
import Pg4imagebanner from '../views/components/Page4/Pg4imagebanner'
import Pg4reviewcard from '../views/components/Page4/Pg4reviewcard'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Parallax from 'react-native-scroll-view-parallax';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Editpgeditprofile from '../views/components/EditprofilePage/Editpgeditprofile'
import Editpgemailbox from '../views/components/EditprofilePage/Editpgemailbox'
import Editpgphbox from '../views/components/EditprofilePage/Editpgphbox'
import Scrollablemenucard from '../views/components/Menu/Scrollablemenucard'
import MenuList from '../views/components/Menu/MenuList'

import Editpgbtnupdate from '../views/components/EditprofilePage/Editpgbtnupdate'
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';


DetailrestaurantScreen.navigationOptions={

  headerShown: false,
  cardStyle:{
    backgroundColor:'#fff',
  }
}

const FirstRoute = () => (
  <ScrollView>
      <Pg4reviewcard/>
      <Pg4reviewcard/>
      <Pg4reviewcard/>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView>

      <Scrollablemenucard/>
      <MenuList/>

  </ScrollView>
);
const ThirdRoute = () => (
  <ScrollView>
    <Pg4imagebanner/>
  </ScrollView>
);


const initialLayout = { width: Dimensions.get('window').width };
const renderTabBar = props => (
  <View  style={styles.tabbarcontainer}>
  <TabBar
    {...props}
    activeColor={'#D63031'}
    inactiveColor={'#757575'}
    indicatorStyle={styles.indicatorbar}
    style={styles.tabbar}
  />
  </View>
);
export default function DetailrestaurantScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Review' },
    { key: 'second', title: 'Menu' },
    { key: 'third', title: 'QR' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute
  });
  const pressHandler= () => {
    navigation.goBack();
  }
  return (

    <SafeAreaView style={styles.container}>
    <View style={styles.heading}>
          <TouchableOpacity style={styles.back} onPress={pressHandler}>
              <Icon style={styles.backicon} name="ios-arrow-back" size={24} color="#212121"/>
          </TouchableOpacity>
          <View style={styles.headertext}>
              <Text style={styles.restaurantname}>Beauty In The Pot</Text>
          </View>
          <View style={styles.space}>

          </View>



      </View>
    <TabView
      style={styles.tabviewcontainer}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}

    />


    </SafeAreaView>




  );



}

const styles = StyleSheet.create({

  container: {
    flex:1,

},
  tabbarcontainer:
  {

    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  tabbar:{

    justifyContent:'center',
    backgroundColor:'#f5f5f5',
    borderRadius:8,
    width:'90%',
    height:55,
    marginBottom:15,

  },
  indicatorbar:
  {

    borderBottomColor:'#D63031',
    borderBottomWidth:3,
    borderRadius:10,
    backgroundColor:'blue',


  },
  scene: {
    flex: 1,
  },
  heading:
  {
    flexDirection:'row',
    width:'100%',
    height:66,
    alignItems:'center',
    justifyContent:'center',
  },
  restaurantname:
  {
    fontWeight:'bold',
    fontSize:24,
  },
  back:
  {
    flex:1,

  },
  headertext:
  {
    alignItems:'center',
    flex:5,

  },
  space:
  {
    flex:1,

  },
  backicon:
  {
    marginLeft:16,
  },

});
