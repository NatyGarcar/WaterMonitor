import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import St from '../StyleSheet';
import DashedLine from './DashedLine';

const WeeklyGraph = (props) => {
  const jsonData = props.jsonData;
  console.log(jsonData)

  const graphData = jsonData.slice(-7);

  const average = array => Math.floor(array.reduce((a, b) => a + b) / array.length);

  for (let i = 0; i < graphData.length; i++) {
    graphData[i].distance = average(graphData[i].distance);
  };

  const { width: windowWidth } = useWindowDimensions();
  const barChartWidth = windowWidth - 88;
  const barGap = 16;
  const barWidth = ((barChartWidth - barGap * 6) / 7) * 0.75;
  const barHeight = 250;

  return (
    <View style={St.dataContainer}>
      <Text style={St.dataTitle}>{props.title}</Text>
      <View style={{ flexDirection: "row", width: barChartWidth, height: 280, paddingTop: 10, alignItems: "flex-end" }}>
        <View style={{ height: barHeight, justifyContent: "space-between" }}>
          <Text style={styles.yAxisLabels}>3 m</Text>
          <Text style={styles.yAxisLabels}>2 m</Text>
          <Text style={styles.yAxisLabels}>1 m</Text>
          <Text style={styles.yAxisLabels}>0 m</Text>
        </View>
        <View style={{ height: 250, justifyContent: "flex-end" }}>
          <View style={{ position: "absolute", height: 250 * 0.96, marginBottom: 8, width: (barWidth * 7 + barGap * 7) - 4, justifyContent: "space-between" }}>
            <DashedLine color="#778DA9" />
            <DashedLine color="#778DA9" />
            <DashedLine color="#778DA9" />
            <DashedLine color="#1B263B" />
          </View>
          {jsonData && <View style={{ flexDirection: "row", alignItems: "flex-end", gap: barGap, paddingHorizontal: 8 }}>
            {graphData.map(bar => (
              <View key={bar.date} style={{ height: barHeight * (bar.distance / 300), width: barWidth, backgroundColor: "#fff", borderTopStartRadius: 2, borderTopEndRadius: 2, borderCurve: 'continuous' }} />
            ))}
          </View>}
          <View style={{ width: (barWidth * 7 + barGap * 7) - 4, height: 2, backgroundColor: "#778DA9", marginHorizontal: 2 }} />
        </View>
      </View>
      <View style={{ width: (barWidth * 7 + barGap * 7) - 4, flexDirection: "row", gap: barGap * 0.7, paddingTop: 2, paddingLeft: barChartWidth - (barWidth * 7 + barGap * 7) + 8 }}>
        {graphData.map(bar => (
          <Text key={bar.date} style={[styles.xAxisLabels, { width: barWidth * 1.2 }]}>{bar.date.slice(5)}</Text>
        ))}
      </View>
    </View>
  )
};

export default WeeklyGraph

const styles = StyleSheet.create({
  yAxisLabels: {
    color: "#778DA9",
    size: 10,
    textAlign: "right",
    paddingLeft: 10,
    marginRight: 10
  },
  xAxisLabels: {
    color: "#fff",
    fontSize: 10,
    MarginTop: 10,
    textAlign: "center"
  }
});