import React, { useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import Header from '../../components/Header'
import CardTeacher, { Teacher } from '../../components/CardTeacher'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  const listTeachersFavoriteds = () => {
    AsyncStorage.getItem('@proffy:favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)
        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(() => { listTeachersFavoriteds() })

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
        {favorites.map((teacher: Teacher) => {
          return (
            <CardTeacher
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Favorites