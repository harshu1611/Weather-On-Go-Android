import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import About from './About';
import Weather from './Weather';
import CustomDrawer from './CustomDrawer'
import Location from './Location';
import Aqi from './Aqi';
import AqiData from './AqiData';
import Loading from './Loading';
const Drawer1 = createDrawerNavigator();

const Drawer=()=> {
  return (
    
      <Drawer1.Navigator initialRouteName="Home" screenOptions={{headerShown:false, drawerItemStyle:{color:'white'}}} drawerStyle={{backgroundColor: 'red'}} drawerContent={props=><CustomDrawer{...props} />}>
        <Drawer1.Screen name="Home" component={Home} />
        <Drawer1.Screen name="Aqi" component={Aqi} />
        <Drawer1.Screen name="Weather" component={Weather} options={{drawerItemStyle: {height:0}}}/>
        <Drawer1.Screen name="AqiData" component={AqiData} />
        <Drawer1.Screen name="Loading" component={Loading} />

    

      </Drawer1.Navigator>
      
    
  )
};

export default Drawer;