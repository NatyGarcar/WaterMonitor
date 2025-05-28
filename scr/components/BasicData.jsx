import { React } from 'react';
import { View, Text } from 'react-native';
import St from './StyleSheet';

export default function BacicData (props) {
    return(
        <View style={[St.dataContainer, {flex: 1}]}>
          <Text style={St.dataTitle}>{props.title}</Text>
          <Text style={St.staticData}>{props.data} {props.unit}</Text>
        </View>
    );
};