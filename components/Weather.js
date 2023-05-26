import { View, Text, ImageBackground, Button, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

import { deviceHeight, deviceWidth } from './Dimensions';
import Loading from './Loading';

export default function Weather(props) {
    const {name}= props.route.params;
    const[temp,setTemp]=useState();
    const[feel,setFeel]=useState();
    const[humidity,setHumidity]=useState();
    const[desc,setDesc]=useState();
    const[loading,setLoading]=useState();

    
    useEffect(()=>{
      setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=cbb5ff06d459a15d93e615ba2cbe7613`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setTemp(res.main.temp)
            setFeel(res.main.feels_like)
            setHumidity(res.main.humidity)
            setDesc(res.weather[4])
            setLoading(false);
        })
    },[name])

   
  return (
    
    <View>
      {loading? <Loading/> :
      <>
        <ImageBackground source= {require('../assets/images/img2.jpg')} style={{height:deviceHeight, width:deviceWidth}}></ImageBackground>
        <View style={{position:'absolute', paddingHorizontal:10, paddingVertical:10}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name='menu' size={46} color='white'></Icon>
        </TouchableOpacity>
        </View>
        <Text style={{position:'absolute',color:'white', fontWeight:'bold',alignSelf:'center', marginTop:deviceHeight/5, fontSize:50}}>{name}</Text>
        <Text style={{position:'absolute',color:'white', fontWeight:'bold',paddingTop:(deviceHeight/5)+80, alignSelf:'center',fontSize:40}}>{temp} ° C</Text>
       <View style={{position:'absolute',flexDirection:'row', color:'white', marginTop:(deviceHeight/5)+160, alignSelf:'center'}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20}}> Feels Like:</Text>
        <Text style={{color:'white', fontWeight:'bold',marginLeft:20,fontSize:20}}>{feel}° C</Text>
       </View>
       <View style={{position:'absolute',flexDirection:'row', color:'white', marginTop:(deviceHeight/5)+200, alignSelf:'center'}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20}}> Humidity:</Text>
        <Text style={{color:'white', fontWeight:'bold',marginLeft:20,fontSize:20}}>{humidity}</Text>
       </View>
       <View style={{position:'absolute', marginTop:deviceHeight/2+50, alignSelf:'center'}}>
       <Pressable title="Go Back" style={{backgroundColor:"#00000000", borderWidth:1, borderColor:'white'}} onPress={()=>props.navigation.navigate("Home")}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize:25, padding:10}}> Go Back</Text>
       </Pressable>

       </View>
       </>
}
    </View>
  )
} 