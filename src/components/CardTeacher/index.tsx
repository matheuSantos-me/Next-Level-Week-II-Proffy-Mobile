import React from 'react'
import { View, Text, Image } from 'react-native'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'

const CardTeacher = () => {

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: "https://avatars2.githubusercontent.com/u/59510927?s=460&u=3c88c79aebe9a224c23bddddcb2465323ce8d1bf&v=4" }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Matheus</Text>
          <Text style={styles.subject}>Quimica</Text>
        </View>
      </View>

      <Text style={styles.bio}>OIOIIOOIOIIOIOIOOIIOIO</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Proço/hora {'   '}
          <Text style={styles.priceValue}>20</Text>
        </Text>

        <View style={styles.containerButtons}>
          <RectButton style={styles.favoriteButton}>
            {/* <FontAwesome name="heart-o" color="#FFFFFF"  size={25} /> */}
            <MaterialCommunityIcons name="heart-off" color="#FFFFFF" size={25} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <FontAwesome name="whatsapp" color="#FFFFFF" size={25} />
            <Text style={styles.contactButtonText}>Entrar em contato!</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default CardTeacher