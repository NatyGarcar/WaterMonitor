import { React } from 'react';
import { View, Text } from 'react-native';
import St from './StyleSheet';

export default function Hladina({title, data}) {
    return(
        <View style={[St.dataContainer, {flex: 1}]}>
          <Text style={St.dataTitle}>{title}</Text>
          <Text style={St.staticData}>{data} m</Text>
        </View>
    );
};