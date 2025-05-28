import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import St from '../StyleSheet';
import TempModule from './TempModule';

const Temperature = ({w_value, a_value}) => {
  return (
    <View style={St.dataContainer}>
      <Text style={St.dataTitle}>Teplota</Text>

      <View style={{flexDirection: 'row'}}>
        <TempModule iconName="water-outline" title1='Teplota' title2='vody:' value={w_value}/>
        <View style={styles.line}/>
        <TempModule iconName="weather-windy" title1='Teplota' title2='vzduchu:' value={a_value}/>
      </View>
    </View>
  )
}

export default Temperature

const styles = StyleSheet.create({
    line: {
        width: 2,
        backgroundColor: '#778DA9',
        marginHorizontal: 8,
    },
})