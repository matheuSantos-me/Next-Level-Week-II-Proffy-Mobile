import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import CardTeacher from '../../components/CardTeacher'

import styles from './styles'

const ListTeacher = () => {
  const [filterVisibled, setFilterVisibled] = useState(false)

  const handleFilter = () => setFilterVisibled(!filterVisibled) 

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
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o dia da semana desejada."
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o horário desejada."
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>

            <RectButton style={styles.formButton}>
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

export default ListTeacher