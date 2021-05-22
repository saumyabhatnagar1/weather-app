import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {NavigationContainer} from'@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Search from './screens/Search';
import Home from './screens/Home';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Tab=createBottomTabNavigator();

export default function App() {
  return (
      <View style={{flex:1}}>
      <StatusBar style="auto" backgroundColor="#383737"/>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName='home-city-outline'
            } else if (route.name === 'Search') {
              iconName='city'
            }

            return <MaterialCommunityIcons name={iconName} size={25} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'white',
          activeBackgroundColor:'#3B3A3A',
          inactiveBackgroundColor:'#3B3A3A'
        }}
      >
          <Tab.Screen name="Home" component={Home} initialParams={{city:"Udaipur"}} />
          <Tab.Screen name="Search" component={Search}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

