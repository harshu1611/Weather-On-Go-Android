import { View, Text,ImageBackground, ActivityIndicator} from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function Loading() {
  return (
    <View>
     <ImageBackground source={require('../assets/images/img2.jpg')} style={{height:deviceHeight, width:deviceWidth, opacity:0.5}}/>
     <ActivityIndicator size="large" style={{position:'absolute',flex:1, alignSelf:'center', marginTop:deviceHeight/3, height:100}} />
    </View>
  )
}