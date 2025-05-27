import { View, Text } from 'react-native'
import React from 'react'
import St from '../components/StyleSheet'
import Header from '../components/Header'

const GraphScreen = () => {
  return (
    <View style={St.background}>
      <Header header="Mesačný prehľad"/>
    </View>
  )
}

export default GraphScreen