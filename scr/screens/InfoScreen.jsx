import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'

import St from '../components/StyleSheet'
import Header from '../components/Header'

const InfoScreen = () => {

  const { width: windowWidth } = useWindowDimensions();
  const bannerWidth = windowWidth - 80

  const easterEgg = ":)"

  return (
    <View style={St.background}>
      <Header header="O nás" />
      <View style={[St.dataContainer, { flex: 1, paddingTop: 24 }]}>
        <Text style={St.infoText}>Táto aplikácia má slúžiť na monitorovanie stavu podzemnej vody v studni za pomoci Raspbery Pi Pico.</Text>
        <Text style={St.infoText}>Bola vyvynutá v rámci projektu KE kraja - LabIT Creativity 4</Text>
        <Text style={St.infoText}>Na jej tvorbe sa podielali žiaci z Gymnázia Javorová 16, Spišská Nová Ves</Text>
        <View>
          <Image style={{ width: bannerWidth, paddingVertical: 10 }} resizeMode='none' source={require("../assets/LabIT-banner.png")} />
        </View>
        <Text style={St.text}>{easterEgg}</Text>
      </View>
    </View>
  )
}

export default InfoScreen