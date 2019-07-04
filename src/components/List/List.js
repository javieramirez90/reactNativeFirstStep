import React from 'react';
import { StyleSheet, View } from 'react-native';

const List = (props) => (
  <View style={styles.placesOutput}>
    { props.placesOutput }
  </View>
  )


export default List;

const styles = StyleSheet.create({
  placesOutput: {
    width: "100%"
  }
})