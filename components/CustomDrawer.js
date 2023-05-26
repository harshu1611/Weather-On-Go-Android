import { View, Text, ImageBackground, Button, Pressable, Linking, Alert} from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList, DrawerItem, Icon} from '@react-navigation/drawer'
import { deviceHeight } from './Dimensions'

const CustomDrawer=(props)=> {
  return (
    
        
            <View>
                <ImageBackground source={require('../assets/images/img3.jpg')} style={{padding:20, height:deviceHeight}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{height:deviceHeight, color:'red'}} >

        <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>Welcome to Weather On Go!</Text>
        <View style={{borderColor:'white', position:'absolute'}}>
        <Pressable title="Home" style={{position:'absolute',backgroundColor:"#00000000",borderColor:'white', borderWidth:1,marginTop:50,borderRadius:20}} onPress={()=>props.navigation.navigate("Home")}>
          <Text style={{color:'white', fontWeight: 'bold', fontSize:20, padding:10}}>Weather By City</Text>
        </Pressable>
        <Pressable title="Home" style={{position:'absolute',backgroundColor:"#00000000",borderColor:'white', borderWidth:1,borderRadius:20,marginTop:120}} onPress={()=>props.navigation.navigate("Aqi")}>
          <Text style={{color:'white', fontWeight: 'bold', fontSize:20, padding:10}}>Air Quality By City</Text>
        </Pressable>
        <Pressable title="Home" style={{position:'absolute',backgroundColor:"#00000000",borderColor:'white', borderWidth:1,borderRadius:20,marginTop:190}} onPress={()=>Alert.alert('More Features Coming Soon')}>
          <Text style={{color:'white', fontWeight: 'bold', fontSize:20, padding:10}}>More Features!</Text>
        </Pressable>
        </View>
        <Text onPress={()=>Linking.openURL('https://www.linkedin.com/in/harshagr0711/')} style={{color:'white', marginTop:deviceHeight/1.17, fontSize:18, fontWeight:'bold',textDecorationLine:'underline'}}>Developed By Harsh Agrawal</Text>
    </DrawerContentScrollView>
    </ImageBackground>
    </View>
    
  )
}

export default CustomDrawer;