import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const Progress = ({cap}) => (
  <View style={styles.border}>
    <View style={styles.gap}>
      <ProgressBar progress={cap/100} color={'#fff'} style={styles.progress} />
    </View>
  </View>
);

export default Progress;

const styles = StyleSheet.create({
  progress: {
    height: 6,
    width: 280,
    backgroundColor: '#1B263B',
    borderRadius: 2,
    flexDirection: 'column',
  },
  gap: {
    backgroundColor: '#1B263B',
    borderRadius: 4,
    padding: 2,
  },
  border: {
    backgroundColor: '#778DA9',
    borderRadius: 6,
    padding: 2,
  }
})