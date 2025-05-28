import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import St from '../StyleSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TempModule = ({value, title1, title2, iconName}) => {
  return (
    <View style={{flex: 1}}>
        
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
            <View style={{alignSelf: 'center'}}>
                <Icon name={iconName} size={48} color="#fff"/>
            </View>
            <View style={{paddingHorizontal: 16}}>
                <Text style={styles.tempTitle}>{title1}</Text>
                <Text style={styles.tempTitle}>{title2}</Text>
                <Text style={[St.staticData, {paddingTop: 16}]}>{value} °C</Text>
            </View>
        </View>
    </View>
  )
}

export default TempModule

const styles = StyleSheet.create({
    tempTitle: {
        color: '#E0E1DD',
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 15,
        textAlign: 'left',
    }
})