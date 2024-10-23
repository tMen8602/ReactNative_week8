import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React, { useEffect, useState } from 'react';
export default function Screen2({navigation}) {
  const [data,SetData] = useState([
    { id: '1', name: 'Bike 1',price:'$1800' ,image:require('../assets/xedap1.jpg'),description:'Xe dap 1 dep lam'},
    { id: '2', name: 'Bike 2' ,price:'$1900' ,image:require('../assets/xedap2.jpg'),description:'Xe dap 2 tuyet voi'},
    { id: '3', name: 'Bike 3' ,price:'$1600' ,image:require('../assets/xedap3.jpg'),description:'Xe dap 3 good'},
    { id: '4', name: 'Bike 4' ,price:'$1500' ,image:require('../assets/xedap4.jpg'),description:'Xe dap 4 leo nui'},
    { id: '5', name: 'Bike 5' ,price:'$1200' ,image:require('../assets/xedap5.jpg'),description:'Xe dap 5'},
    { id: '6', name: 'Bike 6',price:'$1300'  ,image:require('../assets/xedap6.jpg'),description:'Xe dap 6'},
    { id: '7', name: 'Bike 7' ,price:'$1400' ,image:require('../assets/xedap7.jpg'),description:'Xe dap 7 '},
    { id: '8', name: 'Bike 8',price:'$2000'  ,image:require('../assets/xedap8.jpg'),description:'Xe dap 8 '},
    { id: '9', name: 'Bike 9' ,price:'$1700' ,image:require('../assets/xedap9.jpg'),description:'Xe dap 9 '},
    { id: '10', name: 'Bike 10',price:'$2200'  ,image:require('../assets/xedap10.jpg'),description:'Xe dap 10 '},
  
    
  ]);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{flex:1,justifyContent:'space-between',width:170,padding:'2%'}} onPress={()=>navigation.navigate('Screen3',{item})}>
      <Image style={{height:100,width:"100%"}} source= {item.image}></Image> 
      <View style={{flex:0.5}}>
       <Text style={{fontSize:21,textAlign:'center'}} >{item.name}</Text> 
      </View>
      <View style={{flex:0.5}}>
          <Text style={{fontSize:21,textAlign:'center',fontWeight:'bold'}}>{item.price}</Text> 
        </View>
    </TouchableOpacity>
     );
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1,justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>
          The world's Best Bike
        </Text>
      </View>
      <View style={{ flex: 0.2,justifyContent:'center',alignItems:'center',flexDirection:'row',justifyContent:'space-around' }}>
        <TouchableOpacity style={{borderRadius:10,height:30,width:100,justifyContent:'center',borderWidth:1}}>
          <Text  style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:10,height:30,width:100,justifyContent:'center',borderWidth:1}}>
          <Text  style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:10,height:30,width:100,justifyContent:'center',borderWidth:1}}>
          <Text  style={{fontSize:18,fontWeight:'bold',textAlign:'center'}}>Mountain</Text>
        </TouchableOpacity>
      </View>
     
     <View style={{flex:1}}>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id} 
          numColumns={2}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
