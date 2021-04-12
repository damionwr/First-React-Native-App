import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View,  } from 'react-native';
import CarContent from './components/carlist/index';
import Header from './components/header/index';

export default function App() {
  return (
    <View style={styles.container}>
     <Header />
      <CarContent  />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});
