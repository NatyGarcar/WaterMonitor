import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';

const iconSize = 24

const NavBar = () => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.icon}>
                <Icon name="home" size={iconSize} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <Icon name="graph" size={iconSize} color="#778DA9" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <Icon name="info" size={iconSize} color="#778DA9" />
            </TouchableOpacity>
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: "#1B263B",
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    icon:{
        padding: 10,
    }
})