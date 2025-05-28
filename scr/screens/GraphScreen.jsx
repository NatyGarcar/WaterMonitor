import { View, Text } from 'react-native'
import React from 'react'
import St from '../components/StyleSheet'
import Header from '../components/Header'
import useFetch from '../hooks/useFetch'

// *import setting*
import { fullCapacity, fullDepth, radius, url } from '../settings';
import WeeklyGraph from '../components/graphs/WeeklyGraph'

const GraphScreen = () => {

  // *data fetch handling*
  const { jsonData, latest, isPending, error } = useFetch(url);

  return (
    <View style={St.background}>
      <Header header="Dlhodobý prehľad" />
      {isPending && <Text style={[St.text, { alignSelf: "center" }]}>načítavanie...</Text>}
      {error && <Text style={[St.text, { alignSelf: "center" }]}>{error}</Text>}

      {jsonData && <View>
        <WeeklyGraph title="Mesačný prehľad" jsonData={jsonData} />
        <Text style={St.text}>posledné meranie: {latest}</Text>
      </View>}

    </View>
  )
}

export default GraphScreen