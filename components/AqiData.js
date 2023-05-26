import { View, Text, ImageBackground, TouchableOpacity,Pressable } from 'react-native'
import {React,useState,useEffect} from 'react'
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons'
import Loading from './Loading';


export default function AqiData(props) {
    const {name}=props.route.params;
    const[cityName,setCityName]=useState();
    const[lat,setLat]=useState();
    const[long,setLong]=useState();
    const[state,setState]=useState();
    const[components,setComponents]=useState([]);
    const[CO, setCO]=useState();
    const[NO, setNO]=useState();
    const[NO2, setNO2]=useState();
    const[O3, setO3]=useState();
    const[SO2, setSO2]=useState();
    const[PM2, setPM2]=useState();
    const[PM10, setPM10]=useState();
    const[NH3, setNH3]=useState();
    const[aqi,setAqi]=useState();
    const[quality,setQuality]=useState();
    const[qualityColor,setQualityColor]=useState()
    const[loading,setLoading]=useState();
    useEffect(()=>{
        setLoading(true)
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=cbb5ff06d459a15d93e615ba2cbe7613`)
        .then(res=>res.json())
        .then(res=>{
            setLat(res[0].lat);
            setLong(res[0].lon)
            setState(res[0].state)
            setCityName(res[0].name);
            
        })
        .catch((err)=>console.log(err))
        
    },[name])
useEffect(()=>{
    
    fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=cbb5ff06d459a15d93e615ba2cbe7613`)
    .then(res=>res.json())
    .then(res=>{
        setCO(res.list[0].components.co);
        setNO(res.list[0].components.no)
        setNO2(res.list[0].components.no2)
        setNH3(res.list[0].components.nh3)
        setO3(res.list[0].components.o3)
        setPM10(res.list[0].components.pm10)
        setPM2(res.list[0].components.pm2_5)
        setSO2(res.list[0].components.so2)
        setAqi(res.list[0].main.aqi)
        
    
        if(aqi===1){
            setQuality('Good');
            setQualityColor('Green')
        }
        else if(aqi===2){
            setQuality('Fair');
            setQualityColor('blue')
        }
        else if(aqi===3){
            setQuality('Moderate');
            setQualityColor('orange')
        }
        else if(aqi===4){
            setQuality('Poor');
            setQualityColor('brown')
        }
       else if(aqi===5){
            setQuality('Very Poor');
            setQualityColor('red')
        }
            setLoading(false);
})
.catch((err)=>console.log(err))

    
},[{lat,long}])
  return (
    <View>
        {loading? <Loading/> :
        <>
        <ImageBackground source={require('../assets/images/img5.gif')} style={{height:deviceHeight, width:deviceWidth, opacity:0.6}}></ImageBackground>
        <View style={{position:'absolute', paddingHorizontal:10, paddingVertical:10}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name='menu' size={46} color='white'></Icon>
        </TouchableOpacity>
        </View>
      <View style={{position:'absolute', alignSelf:'center'}}>
        <Text style={{marginTop:deviceHeight/6 , color:'white', fontWeight:'bold', fontSize:30}}>Air Quality Index:</Text>
        </View>
        <View style={{position:'absolute', alignSelf:'center'}}>
        <Text style={{marginTop:deviceHeight/4.5 , color:'white', fontWeight:'bold', fontSize:30,textDecorationLine:'underline'}}>{cityName}, {state}</Text>
        <Text style={{color:qualityColor, fontWeight:'bold', alignSelf:'center', fontSize:20,paddingLeft:10,textDecorationLine:'underline',paddingTop:10}}>Quality : {quality} </Text>
        </View>
        <View style={{position:'absolute' ,marginTop:deviceHeight/3, alignSelf:'center'}}>
            <Text style={{color:'black', fontWeight:'bold', alignSelf:'center', fontSize:20,paddingLeft:10,textDecorationLine:'underline'}}>Carbon monoxide (CO) : {CO} μg/m3</Text>
            <Text style={{color:'black', fontWeight:'bold', alignSelf:'center', fontSize:20, paddingTop:10, paddingLeft:10,textDecorationLine:'underline'}}>Nitrogen monoxide (NO) : {NO} μg/m3</Text>
            <Text style={{color:'black', fontWeight:'bold', alignSelf:'center', fontSize:20,paddingTop:10,paddingLeft:10,textDecorationLine:'underline'}}>Nitrogen dioxide (NO2) : {NO2} μg/m3</Text>
            <Text style={{color:'black', fontWeight:'bold', alignSelf:'center', fontSize:20,paddingTop:10,paddingLeft:10,textDecorationLine:'underline'}}>Ozone (O3) : {O3} μg/m3</Text>
            <Text style={{color:'black', fontWeight:'bold', alignSelf:'center', fontSize:20,paddingTop:10,paddingLeft:10,textDecorationLine:'underline'}}>Fine particles matter(PM 2.5) : {PM2} μg/m3</Text>
            <Text style={{color:'black', fontWeight:'bold', alignSelf:'center', fontSize:20,paddingTop:10,paddingLeft:10,textDecorationLine:'underline'}}>Coarse particulate matter (PM 10) : {PM10} μg/m3</Text>
            <Text style={{color:'black', fontWeight:'bold', alignSelf:'center', fontSize:20,paddingTop:10,paddingLeft:10,textDecorationLine:'underline'}}>Ammonia (NH3) : {NH3} μg/m3</Text>
        </View>
        <View style={{position:'absolute', marginTop:deviceHeight/1.3, alignSelf:'center'}}>
       <Pressable title="Go Back" style={{backgroundColor:"#00000000", borderWidth:1, borderColor:'white', borderRadius:20}} onPress={()=>props.navigation.navigate("Aqi")}>
        <Text style={{color:'white', fontWeight: 'bold', fontSize:25, padding:10}}> Go Back</Text>
       </Pressable>
      </View>

      </>
  }
    </View>
  )
}