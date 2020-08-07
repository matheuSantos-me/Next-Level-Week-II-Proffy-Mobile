import React from 'react'
import { AppLoading } from 'expo'
import { StatusBar } from 'react-native'
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins'
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'
import Landing from './src/Pages/Landing'

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
      <Landing />
      <StatusBar style="light"/>
      </>
    )
  }
}

export default App