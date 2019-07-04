import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const InputItem = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An awesome place"
        value={props.placeName}  
        onChangeText={e => props.placeNameChangedHandler(e)} 
      />
      <Button 
        style={styles.placeButton}
        title="ADD" 
        onPress={props.placeSubmitHandler}
      />
    </View>
  )
}

export default InputItem;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%", 
  },
  placeButton: {
    width: "30%"
  }
})
