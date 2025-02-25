import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header ({header}) {
  return (
    <View>
      <Text style={styles.header}>{header}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    header:{
        margin: 8,
        color: '#fff',
        fontSize: 28,
        fontWeight: 600,
        lineHeight: 40,
        textAlign: 'right',
        alignSelf: 'flex-start',
        letterSpacing: 0.5,
    },
})