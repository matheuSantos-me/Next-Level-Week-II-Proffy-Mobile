import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import Logo from '../common/Logo'

import styles from './styles'

interface props {
  title: string;
  headerRight?: ReactNode
}

const Header: React.FC<props> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation()

  const handlePage = page => navigate(page)

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <BorderlessButton onPress={() => handlePage('Landing')}>
          <Ionicons name="md-arrow-back" color="#FFFFFF" size={25} />
        </BorderlessButton>

        <Logo height={25} width={60} />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {headerRight}
      </View>

      {children}
    </View>
  )
}

export default Header