import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Search from './screens/Search';
import Home from './screens/Home'
export default function App() {
  return (
      <View style={{flex:1}}>
      <StatusBar style="auto" backgroundColor="#383737"/>
      {/* <Search/> */}
    <Home/>
    </View>
  );
}

