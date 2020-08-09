import React, { useState } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import HTTPClient from '../../services/HTTPClient'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface listTeacherProps {
  teacher: Teacher;
  favorited: boolean;
}

const CardTeacher: React.FC<listTeacherProps> = ({ teacher, favorited }) => {
  const [teacherFavorited, setTeacherFavorited] = useState(favorited)

  const handleConnectionWPP = () => {
    HTTPClient.post('connections', {
      user_id: teacher.id
    })
    
    Linking.openURL(`whatsapp://send?phone*${teacher.whatsapp}`)
  }

  const handleToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem('@proffy:favorites')
    let listFavorited = []

    if (favorites) {
      listFavorited = JSON.parse(favorites)
    }

    if (teacherFavorited) {
      const favoriteIndex = listFavorited.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })

      listFavorited.splice(favoriteIndex, 1)
      setTeacherFavorited(false)

    } else {
      listFavorited.push(teacher)
      setTeacherFavorited(true)
    }

    await AsyncStorage.setItem('@proffy:favorites', JSON.stringify(listFavorited))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: teacher.avatar }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Proço/hora {'   '}
          <Text style={styles.priceValue}>{teacher.cost}</Text>
        </Text>

        <View style={styles.containerButtons}>
          <RectButton style={[styles.favoriteButton, { backgroundColor: teacherFavorited ? '#E33D3D' : '#8257E5' }]} onPress={() => handleToggleFavorite()}>
            {teacherFavorited ? <MaterialCommunityIcons name="heart-off" color="#FFFFFF" size={25} /> : <FontAwesome name="heart-o" color="#FFFFFF"  size={25} />}
          </RectButton>

          <RectButton style={styles.contactButton} onPress={() => handleConnectionWPP()}>
            <FontAwesome name="whatsapp" color="#FFFFFF" size={25} />
            <Text style={styles.contactButtonText}>Entrar em contato!</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default CardTeacher