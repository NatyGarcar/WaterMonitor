import { React } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Hladina from './components/Hladina';
import Objem from './components/Objem';
import Kapacita from './components/Kapacita';
import Teplota from './components/Teplota';
import Graph from './components/Graph';

const cap = 0.6
const hladina = 160
const objem = 800
const w_temp = 12
const a_temp = 24

export default function App() {
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