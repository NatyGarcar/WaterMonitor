//imports libraries
import { React, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

//imports components
import Header from '../components/Header';
import Hladina from '../components/Hladina';
import Objem from '../components/Objem';
import Kapacita from '../components/Kapacita';
import Teplota from '../components/Teplota';
import Graph from '../components/Graph';

//imports data
import cd from '../data/backup.json';

//data handling
const cap = 0.6
const hladina = 2
const objem = 800
const w_temp = 12
const a_temp = 24


const MainScreen = () => {

  const [data, setData] = useState([]);

  const [date, setDate] = useState('null');
  const [dist, setDist] = useState('null');
  const [temp, setTemp] = useState('null');

  useEffect(() => {
    const FetchJson = async () => {
      const response = await fetch("http://192.168.14.101/data.json");
            const result = await response.json();
            console.warn(result);
            setData(result);
            if (data != []) {
              console.log('success')
            }
    }

    try{
      FetchJson()
      console.log('')
    } catch (error){
      console.error(error);
    } finally{
      setDate(data.data[0].timestamp);
      setDist(data.data[0].distance);
      setTemp(data.data[0].temperature);

      console.log('data set');

      console.log([date, dist, temp]);
    };
  },[])

    return (
      <View style={styles.background}>
        <View>
          <Header header="Meranie vody v studni"/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Hladina title="Hladina" data={hladina}/>
          <Objem title="Objem" data={objem}/>
        </View>
  
        <Kapacita title="Kapacita" cap={cap}/>
  
        <Teplota w_value={w_temp} a_value={a_temp}/>
  
        <Graph/>
        
      </View>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#778DA9',
      paddingTop: 46,
      paddingBottom: 40,
      paddingHorizontal: 16,
    },
  });

export default MainScreen