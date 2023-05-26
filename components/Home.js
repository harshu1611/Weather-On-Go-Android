import { View, Text, ImageBackground, TextInput, Image} from 'react-native'
import React, { useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity, FlatList } from 'react-native'
import Cards from './Cards'

import Weather from './Weather'

export default function Home(props) {
  const[city,setCity]=useState('');
  const cities=[
    {
      name:'New Delhi',
      image:require('../assets/images/delhi.jpg')
    },
    {
      name:'Mumbai',
      image:require('../assets/images/mumbai.jpg')
    },
    {
      name:'Raipur',
      image:require('../assets/images/raipur.jpg')
    },
    {
      name:'London',
      image:require('../assets/images/london.jpg')
    },
    {
      name:'Agra',
      image:require('../assets/images/agra.jpg')
    }
  ]

  return (
    <View>
      
        <ImageBackground source={require('../assets/images/img1.jpg')} style={{height: deviceHeight, width:deviceWidth}} imageStyle={{opacity: 0.8}}/>
      <View style={{position:'absolute', paddingHorizontal:10, paddingVertical:10, flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name='menu' size={46} color='white'></Icon>
        </TouchableOpacity>
        
        </View>
        <View style={{position:'absolute', marginTop:50, alignItems:'center', alignSelf:'center'}}>
        <Text style={{fontSize:36, color:"white" , marginTop:40, textAlign:'center', fontWeight:'bold'}}>Search By City Name</Text>
        </View>
        <View style= {{position:'absolute', marginTop:150, flexDirection:'row', alignSelf:'center'}}>
          <TextInput placeholder='Search city' placeholderTextColor='white' value={city} onChangeText={val=>setCity(val)} style={{ paddingHorizontal:10,height:35, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'white', borderWidth:2, color:'white', fontWeight:'bold'}}></TextInput>
          <TouchableOpacity onPress={()=>props.navigation.navigate('Weather', {name:city})}>
          <Icon name='search' size={20} color='white' style={{marginLeft:10}}/>
          </TouchableOpacity>
        </View>
        <View style={{position:'absolute', marginTop:deviceHeight/1.8, paddingLeft:10}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:35}}>My locations</Text>
          <FlatList horizontal data={cities} style={{marginTop:20}} renderItem={({item})=>(
            <Cards name={item.name} image={item.image} navigation={props.navigation} style={{flexDirection:'row',paddingHorizontal:10,alignItems:'centre'}}></Cards>
          )}></FlatList>
        </View>
        
       
        
      </View>
      
    
  )
}