//*imports libraries*
import { React, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

//*imports styles*
import St from '../components/StyleSheet';

//*imports components*
import Header from '../components/Header';
import Hladina from '../components/Hladina';
import Objem from '../components/Objem';
import Kapacita from '../components/Kapacita';
import Teplota from '../components/Teplota';
import Graph from '../components/Graph';
import NavBar from '../components/NavBar';

//*temporary static data* (to be deleted)
const cap = 0.6
const objem = 800
const a_temp = 24


const MainScreen = () => {

  //*allows data reload*
  const [reload, setReload] = useState(false);

  //*gets main data from json*
  const [jsonData, setJsonData] = useState([]);
  const [latest, setLatest] = useState('');

  //*loads specific data from json*
  const [date, setDate] = useState('');
  const [distArray, setDistArray] = useState([]);
  const [tempArray, setTempArray] = useState([]);

  //*fetch data function*
  useEffect(() => {
    const FetchJson = async () => {
      const url = "http://193.87.164.219/database.json";
      let response = await fetch(url);
      const result = await response.json();

      console.warn(result);
      setJsonData(result.data);
      setLatest(result.last_update);
    };

    try {
      FetchJson();
      if (jsonData != []) {
        console.log('json fetch success');
      }
      else {
        console.log('server down (try to configure ip)');
      };
    } catch (error) {
      console.log(error);
    };
  }, []);

  if (jsonData.length != []) {
    if (date == '') {
      //*sets date, distance array and temperature array*

      setDate(jsonData[jsonData.length - 1].date);
      // console.log(date);

      setDistArray(jsonData[jsonData.length - 1].distance);
      // console.log(distArray);

      setTempArray(jsonData[jsonData.length - 1].temperature);
      // console.log(tempArray);
      console.log("data set");
    } else {
      console.log("data already set");
    };
  } else {
    console.log("no data found");
  };

  return (
    <View style={styles.background}>
      <View>
        <Header header="Meranie vody v studni" />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Hladina title="Hladina" data={distArray[distArray.length - 1]} />
        <Objem title="Objem" data={objem} />
      </View>

      <Kapacita title="Kapacita" cap={cap} />

      <Teplota w_value={tempArray[tempArray.length - 1]} a_value={a_temp} />

      <Graph />

      <Text style={St.text}>last measured: {latest}</Text>
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