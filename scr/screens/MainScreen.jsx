// *imports libraries*
import { React, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// *imports styles*
import St from '../components/StyleSheet';

// *imports components*
import Header from '../components/Header';
import Hladina from '../components/Hladina';
import Objem from '../components/Objem';
import Kapacita from '../components/Kapacita';
import Teplota from '../components/Teplota';
import Graph from '../components/Graph';
import useFetch from '../hooks/useFetch';

// *import setting*
import { url, fullDepth, radius, fullCapacity } from '../settings';

const MainScreen = () => {

  // *stores variables*
  const [date, setDate] = useState('');
  const [distArray, setDistArray] = useState([]);
  const [tempArray, setTempArray] = useState([]);

  // *data fetch handling*
  const { jsonData, latest, isPending, error } = useFetch(url);

  // *measured data*
  if (jsonData && date === '') {
    setDate(jsonData[jsonData.length - 1].date);
    setDistArray(jsonData[jsonData.length - 1].distance);
    setTempArray(jsonData[jsonData.length - 1].temperature);
  };

  // *calculated data*
  var surface = (fullDepth - (distArray[distArray.length - 1] / 100)).toFixed(2);
  var volume = ((3.14*radius**2*surface)*1000).toFixed();
  var capacity = (volume/fullCapacity*100).toFixed(1);
  var waterTemp = tempArray[tempArray.length - 1];
  var airTemp = "N/A";

  // *reload function*
  const [reload, setReload] = useState(false);

  return (
    <View style={styles.background}>
      {isPending && <Text style={St.text}>loading...</Text>}
      {error && <Text style={[St.text, { alignSelf: "center" }]}>{error}</Text>}
      {jsonData && <View>
        <View>
          <Header header="Meranie vody v studni" />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Hladina title="Hladina" data={surface} />
          <Objem title="Objem" data={volume} />
        </View>

        <Kapacita title="Kapacita" cap={capacity} />

        <Teplota w_value={waterTemp} a_value={airTemp} />

        <Graph jsonData={jsonData} />

        <Text style={St.text}>last measured: {latest}</Text>
      </View>}

    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0D1B2A',
    paddingTop: 46,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
});

export default MainScreen