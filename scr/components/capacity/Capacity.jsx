import { React } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Progress from './Progress';
import St from '../StyleSheet';

export default function Capacity({title, cap}) {
    return(
        <View style={St.dataContainer}>
          <Text style={St.dataTitle}>{title}</Text>
          <View style={styles.databox}>
            <View>
              <Progress cap={cap}/>
            </View>
            <Text style={styles.int}>{cap}%</Text>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  int: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    letterSpacing: 0.5,
    textAlignVertical: 'center',
    paddingHorizontal: 16
  },
  databox: {
    paddingTop: 24,
    paddingBottom: 18,
    flexDirection: 'row',
  },
});