//imports libraries
import { React } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//imports screens
import MainScreen from './screens/MainScreen';
import GraphScreen from './screens/GraphScreen';
import InfoScreen from './screens/InfoScreen';
import JsonTest from './screens/JsonTest';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style='light'/>
      {/* <JsonTest/> */}
      {/* <MainScreen /> */}
      <GraphScreen/>
      {/* <InfoScreen/> */}
      <NavBar/>
    </View>
  );
}