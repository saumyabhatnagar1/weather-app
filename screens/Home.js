import * as React from 'react';
import { TextInput ,Button,Title,Card} from 'react-native-paper';
import {View , Text, FlatList,Image, Alert} from 'react-native';
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home=(props)=>{


    const [info,setInfo]=React.useState({
        name1:"Loading...",
        temp:"Loading...",
        humidity:"Loading...",
        desc:"Loading...",
        icon:"Loading...",
    });
    React.useEffect(()=>{
        getWeather()
    },[])
    const  getWeather=async ()=>{
        let select_city= await AsyncStorage.getItem("new_city")
        if(!select_city){
            //default udaipur will be loaded
            const {city}=props.route.params;
            select_city=city;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select_city}&appid=c25c74e2edd2b63e2ad976253e25caf7&units=metric`)
        .then(item=>item.json())
        .then(results=>{
            setInfo({
                name1:results.name,
                temp:22,
                humidity:results.main.humidity,
                desc:results.weather[0].description,
                icon:results.weather[0].icon
            })
            // console.log(results)
        }).catch(err=>{
            Alert(err.message)
        })
    }

    if(props.route.params.city!="Udaipur");
    getWeather();
    return (
        <View style={{flex:1}}>
            <Header name="Saumya's Weather App"/>
                <View style={{alignItems:"center"}} >
                <Title style={{
                    color:'#3B3A3A',
                    marginTop:30,
                    fontSize:30
                }}>
                    {info.name1}
                </Title>
                <Image 
                style={{
                    width:120,
                    height:120
                }}
                source={{uri:"https://openweathermap.org/img/w/"+info.icon+".png"}}
                />
                </View>
                <Card style={{
                    margin:5,
                    padding:12,
                }}>
                    <Title style={{color:'#3B3A3A'}}>
                        Temperature : {info.temp} C
                    </Title>
                </Card>

                <Card style={{
                    margin:5,
                    padding:12,
                }}>
                    <Title style={{color:'#3B3A3A'}}>
                        Humidity : {info.humidity}%
                    </Title>
                </Card>

                <Card style={{
                    margin:5,
                    padding:12,
                }}>
                    <Title style={{color:'#3B3A3A'}}>
                        Description : {info.desc}.
                    </Title>
                </Card>

            
        </View>
    )
}
export default Home