import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Ionicons, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import LandingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/giveClasses.png'

import styles from './styles'

const Landing = () => {
  const navigation = useNavigation()

  const handlePage = (page) => navigation.navigate(page)

  return (
    <View style={styles.container}>
      <Image source={LandingImg} style={styles.banner} />

      <Text style={styles.title}>Seja bem-vindo. {'\n'}<Text style={styles.titleBold}>O que deseja fazer?</Text></Text>

      <View style={styles.containerButtons}>
        <RectButton style={[styles.button, styles.buttonPrimary]} onPress={() => handlePage('Study')}>
          <Feather name="book-open" color="#FFFFFF" size={40} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton style={[styles.button, styles.buttonSecondary]} onPress={() => handlePage('GiveClasses')}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 200 conexões já realizadas! {' '}
        <Ionicons name="ios-heart" size={18} />
      </Text>
    </View>
  )
}

export default Landing