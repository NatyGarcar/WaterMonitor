import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import St from './StyleSheet';

const Graph = (props) => {
  const jsonData = props.jsonData;

  const graphData = jsonData.slice(-7)

  const average = array => Math.floor(array.reduce((a, b) => a + b) / array.length);

  for (let i = 0; i < graphData.length; i++) {
    graphData[i].distance = average(graphData[i].distance);
  };

  const { width: windowWidth } = useWindowDimensions()
  const barChartWidth = windowWidth - 88
  const barGap = 16
  const barWidth = ((barChartWidth - barGap * 6) / 7) * 0.8
  const barHeight = 250

  console.log(graphData)

  return (
    <View style={St.dataContainer}>
      <Text style={St.dataTitle}>Týždenný prehľad</Text>
      <View style={{ flexDirection: "row", width: barChartWidth, height: 280, paddingTop: 10, alignItems: "flex-end" }}>
        <View style={{ height: barHeight, justifyContent: "space-between" }}>
          <Text style={styles.text}>300</Text>
          <Text style={styles.text}>200</Text>
          <Text style={styles.text}>100</Text>
          <Text style={styles.text}>0</Text>
        </View>
        <View style={{ height: 250, justifyContent: "flex-end" }}>
          <View style={{ position: "absolute", height: 250 * 0.93, marginBottom: 8, width: (barWidth * 7 + barGap * 7) - 4, justifyContent: "space-between" }}>
            <View style={{ width: (barWidth * 7 + barGap * 7) - 4, borderStyle: 'dashed', borderWidth: 1, borderRadius: 1, borderColor: "#778DA9", marginHorizontal: 2, }} />
            <View style={{ width: (barWidth * 7 + barGap * 7) - 4, borderStyle: 'dashed', borderWidth: 1, borderRadius: 1, borderColor: "#778DA9", marginHorizontal: 2, }} />
            <View style={{ width: (barWidth * 7 + barGap * 7) - 4, borderStyle: 'dashed', borderWidth: 1, borderRadius: 1, borderColor: "#778DA9", marginHorizontal: 2, }} />
            <View style={{ width: (barWidth * 7 + barGap * 7) - 4, borderStyle: 'dashed', borderWidth: 1, borderRadius: 1, borderColor: "#1B263B", marginHorizontal: 2, }} />
          </View>
          {jsonData && <View style={{ flexDirection: "row", alignItems: "flex-end", gap: barGap, paddingHorizontal: 8 }}>
            {graphData.map(bar => (
              <View style={{ height: barHeight * (bar.distance / 300), width: barWidth, backgroundColor: "#fff", borderTopStartRadius: 2, borderTopEndRadius: 2, borderCurve: 'continuous' }} />
            ))}
          </View>}
          <View style={{ width: (barWidth * 7 + barGap * 7) - 4, height: 2, backgroundColor: "#778DA9", marginHorizontal: 2 }} />
          <View style={{ width: (barWidth * 7 + barGap * 7) - 4, flexDirection: "row", gap: barGap, paddingHorizontal: 8 }}>
            {graphData.map(bar => (
              <Text style={{ width: barWidth, color: "#fff", fontSize: 6 }}>{bar.date}</Text>
            ))}
          </View>
        </View>

      </View>

    </View>
  )
}

export default Graph

const styles = StyleSheet.create({
  text: {
    color: "#778DA9",
    size: 10,
    textAlign: "right",
    paddingLeft: 10,
    marginRight: 10
  }
})