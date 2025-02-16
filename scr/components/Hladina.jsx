import { React } from 'react';
import { View, StyleSheet , Text } from 'react-native';
import St from './StyleSheet';

export default function Hladina({title, data}) {
    return(
        <View style={St.container}>
          <Text style={styles.title}>{title}</Text>
          <Text>{data} m</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  title:{
    color: '#E0E1DD',
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 18,
    textAlign: 'right',
  },
  data:{
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",

  },
});