import React from 'react';
import { View, StyleSheet , Text } from 'react-native';
import St from './StyleSheet';

export default function Databox({title, data}) {
    return(
        <View style={St.container}>
          <Text style={styles.title}>{title}</Text>
          <Text>{data}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  title:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 18,
    textAlign: 'right',
  },
  data:{

  },
});