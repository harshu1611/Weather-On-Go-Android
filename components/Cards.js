import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function Cards({name,image,navigation}) {
  return (
    <TouchableOpacity style={{marginHorizontal:10, flexDirection:'row'}} onPress={()=>navigation.navigate('Weather', {name})}>
      <ImageBackground source={image} style={{height:deviceHeight/5, width:deviceWidth/2-50}}>
        <Text style={{alignSelf:'center', fontWeight: 'bold', fontSize:20}}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}