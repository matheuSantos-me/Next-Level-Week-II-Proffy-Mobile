import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ListTeacher from '../Pages/ListTeacher.js'
import Favorites from '../Pages/Favorites/index.js'

const { Navigator, Screen } = createBottomTabNavigator()

const TabsStack = () => {
  return (
    <Navigator>
      <Screen name="ListTeacher" component={ListTeacher} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  )
}

export default TabsStack