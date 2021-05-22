import * as React from 'react';
import { TextInput ,Button,Card} from 'react-native-paper';
import {View , Text, FlatList,} from 'react-native';
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Search = ({navigation}) => { 
    const [city,setCity]=React.useState('');
    const [cities,setCities]=React.useState([]);
    const fetchCities=(text)=>{
        setCity(text)
        fetch("https://autocomplete.search.hereapi.com/v1/autocomplete?q="+text+"&apiKey=AX3W3K9LDRm-FpM8M9aBpsDrlX2IoTJYPjsOTkSFdDI")
        .then(item=>item.json())
        .then(cityData=>{

            setCities(cityData.items)
            // console.log(cityData.items)
        }
        )
    }
    const btnClick=async()=>{
        await AsyncStorage.setItem("new_city",city);
        navigation.navigate("Home",{city})

    }
    const listClick=async (cityname)=>{
        setCity(cityname);
        await AsyncStorage.setItem("new_city",city);
        navigation.navigate("Home",{city:cityname});
    }
    


  return (
    <View style={{flex:1}}>
        <Header name="Search Screen"/>
        <TextInput
        label="City Name"
        theme={{colors:{primary:"#7D7979"}}}
        value={city}
        onChangeText={(text)=>
            fetchCities(text)
            
        }
        />
        <Button
        icon="content-save" mode="contained" onPress={()=>{console.log('pressed')}}
        theme={{colors:{primary:'#7D7979'}}}
        style={{margin:20}}
        onPress={()=>{
            btnClick();
        }}
        >
        <Text style={{color:"white"}}>Search</Text>
        
        </Button>
        <FlatList
        data={cities}
        renderItem={({item})=>{
            return (
                <Card
                onPress={()=>{
                    listClick(item.address.city);
                }}
                style={{margin:2,padding:12}}>
                <Text>{item.address.city},{item.address.countryName}</Text>
                </Card>
            
            )
        }}
        
        />
    </View>
  );
};

export default Search;