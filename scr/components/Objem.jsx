import { React } from 'react';
import { View , Text } from 'react-native';
import St from './StyleSheet';

export default function Objem({title, data}) {
    return(
        <View style={[St.dataContainer, {flex: 1}]}>
          <Text style={St.dataTitle}>{title}</Text>
          <Text style={St.staticData}>{data} l</Text>
        </View>
    );
};