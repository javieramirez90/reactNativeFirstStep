import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const buttonBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

export default buttonBackground;

const styles =  StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white"
  }
});