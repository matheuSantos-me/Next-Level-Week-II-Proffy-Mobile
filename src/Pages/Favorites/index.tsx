import React from 'react'
import { View } from 'react-native'

import Header from '../../components/Header'
import CardTeacher from '../../components/CardTeacher'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

const Favorites = () => {

  return (
    <View style={styles.container}>
      <Header title="Meus proffys favoritos!" />

      <ScrollView
        style={styles.listTeacher}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
        <CardTeacher />
      </ScrollView>
    </View>
  )
}

export default Favorites