import React from 'react';
import { SafeAreaView , StatusBar } from 'react-native';
import Padaria from './src/pages/Padaria';
import{ useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_700Bold} from "@expo-google-fonts/montserrat";

export default function App() {
  const[fontecarregada] = useFonts({
    
  })

  return (
    <SafeAreaView>
         <StatusBar/>
      <Padaria/>
    </SafeAreaView>
  );
}
