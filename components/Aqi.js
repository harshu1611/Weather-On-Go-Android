import { View, Text, ImageBackground, TouchableOpacity, TextInput} from 'react-native'
import {React,useState} from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'


export default function Aqi(props) {
    const [city,setCity]=useState();
  return (
    <View>
        <ImageBackground source={require('../assets/images/img4.jpg')} style={{height:deviceHeight, width:deviceWidth}}></ImageBackground>
        <View style={{position:'absolute', paddingHorizontal:10, paddingVertical:10}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name='menu' size={46} color='white'></Icon>
        </TouchableOpacity>
        </View>
        <View style={{position:'absolute', marginTop:50, alignItems:'center', alignSelf:'center', marginTop:deviceHeight/4}}>
        <Text style={{fontSize:32, color:"white" , marginTop:40, fontWeight:'bold', alignSelf:'center'}}>Search AQI By City Name</Text>
        </View>
        <View style= {{position:'absolute', marginTop:150, flexDirection:'row', alignSelf:'center',marginTop:deviceHeight/3+50}}>
          <TextInput placeholder='Search city' placeholderTextColor='white' value={city} onChangeText={val=>setCity(val)} style={{ paddingHorizontal:10,height:35, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'white', borderWidth:2, color:'white', fontWeight:'bold'}}></TextInput>
          <TouchableOpacity onPress={()=>props.navigation.navigate('AqiData', {name:city})}>
          <Icon name='search' size={20} color='white' style={{marginLeft:10}}/>
          </TouchableOpacity>
        </View>
        </View>
   
  )
}