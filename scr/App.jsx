import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Hladina from './components/Hladina';
import Data from './assets/Data'

export default function App() {
  return (
    <View style={styles.background}>
      
        <Header header="Meranie vody v studni"/>
      
      <View style={{flexDirection: 'row'}}>
        <Hladina title="hladina" data={160}/>
        
      </View>

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
    padding: 28,
  },
});
