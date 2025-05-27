import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import St from './StyleSheet';

import DashedLine from './DashedLine';

const Graph = (props) => {
  const jsonData = props.jsonData;

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
      <Text style={St.dataTitle}>Týždenný prehľad</Text>
      <View style={{ flexDirection: "row", width: barChartWidth, height: 280, paddingTop: 10, alignItems: "flex-end" }}>
        <View style={{ height: barHeight, justifyContent: "space-between" }}>
          <Text style={styles.text}>3 m</Text>
          <Text style={styles.text}>2 m</Text>
          <Text style={styles.text}>1 m</Text>
          <Text style={styles.text}>0 m</Text>
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
      <View style={{ width: (barWidth * 7 + barGap * 7) - 4, flexDirection: "row", gap: barGap, paddingHorizontal: 10, alignSelf: "flex-end", paddingTop: 2 }}>
        {graphData.map(bar => (
          <Text key={bar.date} style={{ width: barWidth * 1.1, color: "#fff", fontSize: 10, MarginTop: 10, textAlign: "center"  }}>{bar.date.slice(5)}</Text>
        ))}
      </View>
    </View>
  )
};

export default Graph

const styles = StyleSheet.create({
  text: {
    color: "#778DA9",
    size: 10,
    textAlign: "right",
    paddingLeft: 10,
    marginRight: 10
  }
});