import React from "react";
import { Entypo } from '@expo/vector-icons'
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({title, onPress, icon, color}) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'}>
            <Text style={styles.text}>{title}</Text>
            </Entypo>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        color: '#f1f1f1',
        margin: 20
    }
})