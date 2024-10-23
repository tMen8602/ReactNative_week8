import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
export default function Screen1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.8,justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>
          A premium onlibne store for sporter and their stylish choice
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Image style={{height:220,width:330}} source={require('../assets/xedap.jpg')} />
      </View>
      <View style={{ flex: 1 ,justifyContent:'center'}}>
        <Text  style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>POWER BIKE SHOP</Text>
      </View>
      <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
        <TouchableOpacity style={{backgroundColor:'red',borderRadius:20,height:50,width:280,justifyContent:'center'}} onPress ={()=>navigation.navigate('Screen2')}>
          <Text  style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
