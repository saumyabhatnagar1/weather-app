import * as React from 'react';
import { TextInput ,Button,Title,Card} from 'react-native-paper';
import {View , Text, FlatList,Image} from 'react-native';
import Header from './Header'
const Home=()=>{


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
    const getWeather=()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=ajmer&appid=c25c74e2edd2b63e2ad976253e25caf7&units=metric`)
        .then(item=>item.json())
        .then(results=>{
            setInfo({
                name1:results.name,
                temp:results.main.temp,
                humidity:results.main.humidity,
                desc:results.weather[0].description,
                icon:results.weather[0].icon
            })
        })
    }


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