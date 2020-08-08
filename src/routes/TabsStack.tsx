import React from 'react'
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import ListTeacher from '../Pages/ListTeacher'
import Favorites from '../Pages/Favorites'

const { Navigator, Screen} = createBottomTabNavigator()

const TabsStack = () => {
  return (
    <Navigator
      tabBarOptions = {{
        style: {
          elevation: 0,
          shadomOpacity: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 0
        },
        iconStyle: {
          flex: 0,
          height: 25,
          width: 25
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 14,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D'
      }}
    >
      <Screen
        name="ListTeacher" 
        component={ListTeacher}
        options={{
          tabBarLabel: 'Proffy',
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {!focused ? <Image source={require('../assets/images/icons/easel-disabled.png')} /> : <Image source={require('../assets/images/icons/easel-active.png')} />}
              </View>
            )
          }
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <>
                <Feather name="heart" color={focused ? '#8557E5' : color} size={size} />
              </>
            )
          }
        }}
      />
    </Navigator>
  )
}

export default TabsStack