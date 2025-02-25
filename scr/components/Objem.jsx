import { React } from 'react';
import { View, StyleSheet , Text } from 'react-native';
import St from './StyleSheet';

export default function Objem({title, data}) {
    return(
        <View style={[St.container, {flex: 1}]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.data}>{data} l</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  title:{
    color: '#E0E1DD',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 18,
    textAlign: 'left',
  },
  data:{
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
    textAlign: "right"
  },
});