import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

interface props {
  height: number
  width: number
}

const Logo: React.FC<props> = ({ height, width }) => {

  return (
    <View style={{ height: height, width: width, alignSelf: 'flex-end' }}>
      <Image source={require('../../assets/images/logo.png')} resizeMode="contain" style={[ styles.image, { height: height }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%'
  }
})

export default Logo