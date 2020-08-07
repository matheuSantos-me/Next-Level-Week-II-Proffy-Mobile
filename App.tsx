import React from 'react'
import { AppLoading } from 'expo'
import { StatusBar } from 'react-native'
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins'
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'

import AppStack from './src/routes/AppStack'

const App = () => {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
      <AppStack />
      <StatusBar style="light"/>
      </>
    )
  }
}

export default App