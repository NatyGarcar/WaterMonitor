// *imports libraries*
import { React, useState } from 'react';
import { Text, View } from 'react-native';

// *imports styles*
import St from '../components/StyleSheet';

// *imports components*
import BasicData from '../components/BasicData';
import Capacity from '../components/capacity/Capacity';
import WeeklyGraph from '../components/graphs/WeeklyGraph';
import Header from '../components/Header';
import Temperature from '../components/temperature/Temperature';
import useFetch from '../hooks/useFetch';

// *import setting*
import { fullCapacity, fullDepth, radius, url } from '../settings';

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
    <View style={St.background}>
      {isPending && <Text style={[St.text, { alignSelf: "center" }]}>načítavanie...</Text>}
      {error && <Text style={[St.text, { alignSelf: "center" }]}>{error}</Text>}
      {jsonData && <View>
        <View>
          <Header header="Meranie vody v studni" />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <BasicData title="Hladina" data={surface} unit="m" />
          <BasicData title="Objem" data={volume} unit="l" />
        </View>

        <Capacity title="Kapacita" cap={capacity} />

        <Temperature w_value={waterTemp} a_value={airTemp} />

        <WeeklyGraph title="Týždenný prehľad" jsonData={jsonData} />

        <Text style={St.text}>posledné meranie: {latest}</Text>
      </View>}
    </View>
  );
}

export default MainScreen