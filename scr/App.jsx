//imports libraries
import { React } from 'react';
import { View } from 'react-native';

//imports screens
import MainScreen from './screens/MainScreen';
import JsonTest from './screens/JsonTest';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <JsonTest/>
      {/* <MainScreen/> */}
    </View>
  );
}