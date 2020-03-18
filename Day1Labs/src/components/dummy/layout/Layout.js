import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Container = props => {
    const { children = null } = props
    return (
        <View style={container}>
            {children}
        </View>
    )
}

export const Content = props => {
    const { children = null } = props
    return (
        <View style={container}>
            {children}
        </View>
    )
}

export const Header = props => {
    const { title } = props
    return (
        <View style={header}>
            <Text style={headerText}> {title} </Text>
        </View>
    )
}

const {container, header, headerText}  = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    header: {
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 50,
        flexShrink: 0
    },
    headerText: {
        color: '#fff',
        fontSize: 28,
        textAlign: 'center'
    }
})