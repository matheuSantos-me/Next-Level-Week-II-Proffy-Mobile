import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

const GiveClasses = () => {
  const { goBack } = useNavigation()

  const handlerBack = () => goBack()

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
      </ImageBackground>

      <RectButton style={styles.button} onPress={() => handlerBack()}>
        <Text style={styles.buttonText}>Tudo bem!</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses