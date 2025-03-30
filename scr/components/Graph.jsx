import { View, StyleSheet } from 'react-native';
import { BarChart } from "react-native-chart-kit";
import React from 'react';

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [27, 45, 28, 80, 99, 43]
      }
    ]
  };

const Graph = () => {
  return (
    <View>
        <BarChart
            data={data}
            width={356}
            height={220}
            yAxisLabel=""
            chartConfig={{
                backgroundColor: "#555",
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {borderRadius: 16}
            }}
            style={styles.graph}
        />
    </View>
  )
}

export default Graph

const styles = StyleSheet.create ({
    graph: {
        padding: 10
    },
})