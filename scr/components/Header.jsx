import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header ({header}) {
  return (
    <View>
            <Text style={st.title}>{header}</Text>
    </View>
  )
}

const st = StyleSheet.create ({
    title:{
        color: '#fff',
        fontSize: 28,
        fontWeight: 600,
        lineHeight: 40,
        textAlign: 'right',
        alignSelf: 'flex-start',
        letterSpacing: 0.5,
        shadowColor: "#0D1B2A", 
        shadowOffset: { width: 0.5, height: 0.5 }, 
        shadowRadius: 1,
    },
})