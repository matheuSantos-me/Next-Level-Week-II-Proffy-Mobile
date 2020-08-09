import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import { Feather } from '@expo/vector-icons'

import HTTPClient from '../../services/HTTPClient'

import Header from '../../components/Header'
import CardTeacher, { Teacher } from '../../components/CardTeacher'

import styles from './styles'

const ListTeacher = () => {
  const [listTeachers, setListTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [filterVisibled, setFilterVisibled] = useState(false)
  const [state, setState] = useState({
    subject: '',
    week_day: '',
    time: ''
  })

  const listTeachersFavoriteds = () => {
    AsyncStorage.getItem('@proffy:favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds)
      }
    })
  }

  const handleFilter = () => setFilterVisibled(!filterVisibled)
  const handleFilterTeacher = async () => {
    listTeachersFavoriteds()
    const { data } = await HTTPClient.get('classes', {
      params: state
    })
    setFilterVisibled(false)
    setListTeachers(data)
  }

  useFocusEffect(() => { listTeachersFavoriteds() })

  return (
    <View style={styles.container}>
      <Header
        title="Proffys disponíveis!"
        headerRight={
          <BorderlessButton onPress={() => handleFilter()}>
            <Feather name="filter" color="#FFFFFF" size={20} />
          </BorderlessButton>
        }
      >

        {filterVisibled && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a matéria desejada."
              placeholderTextColor="#C1BCCC"
              value={state.subject}
              onChangeText={subject =>   setState({ ...state, subject })}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o dia da semana desejada."
                  placeholderTextColor="#C1BCCC"
                  value={state.week_day}
                  onChangeText={week_day =>   setState({ ...state, week_day })}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o horário desejada."
                  placeholderTextColor="#C1BCCC"
                  value={state.time}
                  onChangeText={time =>   setState({ ...state, time })}
                />
              </View>
            </View>

            <RectButton style={styles.formButton} onPress={() => handleFilterTeacher()}>
              <Text style={styles.formButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </Header>

      <ScrollView
        style={styles.listTeacher}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        {listTeachers.map((teacher: Teacher) => {
          return (
            <CardTeacher
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
        )})}
      </ScrollView>
    </View>
  )
}

export default ListTeacher