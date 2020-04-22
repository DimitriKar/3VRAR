
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const Button = ({ title, onPress, backgroundColor, color }) => {
  return (
    <TouchableOpacity
      style={[buttonStyle, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[buttonText, { color }]}> {title} </Text>
    </TouchableOpacity>
  );
};

const { buttonStyle, buttonText } = StyleSheet.create({
  buttonStyle: {
    padding: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
  },
});
