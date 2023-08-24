import React from 'react';
import { SafeAreaView , StatusBar } from 'react-native';
import Padaria from './src/pages/Padaria';

export default function App() {

  return (
    <SafeAreaView>
         <StatusBar/>
      <Padaria/> 
    </SafeAreaView>
  );
}
