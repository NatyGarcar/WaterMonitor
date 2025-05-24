import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import St from './StyleSheet';

const Graph = (jsonData) => {
  const data = JSON.parse(jsonData)
  //console.log(jsonData)
  //console.log(jsonData[0])
  const graphData = {
    labels:[jsonData[0]],
    data:[]
  }

  return (
    <View style={St.dataContainer}>
      <Text>{}</Text>
    </View>
  )
}

export default Graph

const styles = StyleSheet.create({})