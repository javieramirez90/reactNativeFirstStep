import React, { Component } from 'react'
import { View, Image, Button, StyleSheet } from 'react-native'

import imagePlaceHolder from '../../assets/background.jpg';

class PickImage extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagePlaceHolder} style={styles.previewImage} />
        </View>
        <View style={styles.button} >
          <Button title="Pick Image" onPress={() => alert("Picked image")}/>
        </View>
      </View>
    )
  }
}

export default PickImage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder : {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 10
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
})