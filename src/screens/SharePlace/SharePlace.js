import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView } from 'react-native';
import { connect } from 'react-redux'
 
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  render() {
    return(
      <ScrollView >
        <View style={styles.container}>
        <Text>Share a Place with us!</Text>
        <View style={styles.placeholder}>
          <Text>Image Preview!</Text>
        </View>
        <Button title="Pick Image"/>
        <View style={styles.placeholder}>
          <Text>>Map</Text>
        </View>
        <Button title="Locate Me"/>
        <TextInput placeholder="Place name"/>
        <Button title="Share the place!" />
        </View>
      </ScrollView>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",  
  },
  placeholder : {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  }
})