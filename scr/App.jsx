import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Hladina from './components/Hladina';
import Objem from './components/Objem';
import Kapacita from './components/Kapacita';

const cap = 0.6
const hladina = 160
const objem = 800

export default function App() {
  return (
    <View style={styles.background}>
      
        <Header header="Meranie vody v studni"/>
      
      <View style={{flexDirection: 'row'}}>
        <Hladina title="Hladina" data={hladina}/>
        <Objem title="Objem" data={objem}/>
      </View>
        <Kapacita title="Kapacita" cap={cap}/>

      {/* <Databox title='kapacita'/>
      <Databox title='teplota'/>
      <Databox title='prehľad hladiny'/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#778DA9',
    paddingTop: 60,
    padding: 20,
  },
});
