import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "./components/Home"
import Weather from './components/Weather'
import Drawer from './components/Drawer'



const Stack= createNativeStackNavigator();

  
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Weather' component={Weather}/>
      </Stack.Navigator> */}
      <Drawer/>
    </NavigationContainer>

  )
}