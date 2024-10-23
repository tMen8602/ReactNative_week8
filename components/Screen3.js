import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Screen3({route}) {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      
      <View style={{ flex: 1.2 }}>
        <Image style={{height:'89%',width:'100%'}} source={require('../assets/xedap.jpg')} />
      </View>
      
      <View style={{ flex: 0.3 ,justifyContent:'center',alignItems:'flex-start'}}>
        <Text  style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>{item.name}</Text>
      </View>
      <View style={{ flex: 0.1 ,justifyContent:'center',alignItems:'flex-start'}}>
        <Text  style={{fontSize:19,textAlign:'center'}}>{item.price}</Text>
      </View>
      <View style={{ flex: 0.3 ,justifyContent:'center',alignItems:'flex-start'}}>
        <Text  style={{fontSize:16,fontWeight:'bold',textAlign:'center'}}>Description</Text>
      </View>
      <View style={{ flex: 0.3 ,justifyContent:'center'}}>
        <Text  style={{fontSize:15,fontWeight:'bold',color:'gray'}}>{item.description}</Text>
      </View>
      <View style={{ flex: 0.5,justifyContent:'center',alignItems:'center',justifyContent:'space-around',flexDirection:'row' }}>
      <Image style={{height:30,width:30}} source={require('../assets/heart.png')}/>
        <TouchableOpacity style={{backgroundColor:'red',borderRadius:20,height:50,width:250,justifyContent:'center'}}>
          <Text  style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'white'}}>Add to card</Text>
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
