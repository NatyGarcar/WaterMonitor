import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Databox from './components/Databox';

export default function App() {
  return (
    <View style={styles.background}>
      
        <Header header="Meranie vody v studni"/>
      
      <View style={{flexDirection: 'row'}}>
        <Databox title="hladina" data="160 m"/>
        <Databox title="objem" data="800 l"/>
      </View>

      <Databox title='kapacita'/>
      <Databox title='teplota'></Databox>
      <Databox title='prehľad hladiny'></Databox>
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
  title:{
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 40,
    textAlign: 'right',
    alignSelf: 'flex-start',
    paddingHorizontal: 8
  },
  containers: {
    flex: 1,
    margin: 16,
    padding: 16,
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
  },
});
