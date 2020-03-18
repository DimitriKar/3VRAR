import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Button = ({
    onPress,
    title,
    backgroundColor,
    color
}) => {
    return (
        <TouchableOpacity
            style={[buttonStyle, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[buttonText, { color }]} > {title} </Text>
        </TouchableOpacity>
    )
}

const { buttonText, buttonStyle } = StyleSheet.create({
    buttonText: {
        fontSize: 25,
    },
    buttonStyle: {
        padding: 15,
        borderRadius: 20
    }
})