import {View, Text, useWindowDimensions} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const barChartData = {
    labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets:[
     {
         data:[28, 45, 60, 70, 30],
     }
    ]
 }

const BarChartDemo = ()=>{
    const {width} = useWindowDimensions();
   return (
    <View>
        <Text>Bar chart demo</Text>
        <BarChart
        data={barChartData}
        yAxisLabel=''
        yAxisSuffix=''
        width={width}
        height={400}
        chartConfig={{
            backgroundGradientFrom:'yellow',
            backgroundGradientFromOpacity: 0.5,
            backgroundGradientTo:'lightgreen',
            backgroundGradientToOpacity: 1,
            color:()=> 'red',
            barPercentage: 0.6
        }}
        style={{borderColor:'black', borderWidth:1}}
        withInnerLines={false}
        // verticalLabelRotation={50}
        // horizontalLabelRotation={40}
        showValuesOnTopOfBars
        showBarTops={false}
        withCustomBarColorFromData
        flatColor
        />
    </View>
   )
}

export default BarChartDemo;