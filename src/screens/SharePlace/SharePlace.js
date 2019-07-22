import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'
 
import { addPlace } from '../../store/actions/index';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import HeadingfText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import PickImage  from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      placeName : ""
    }
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

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    })
  }

  placeAddedHandler = () => {
    if(this.state.placeName.trim() !== ""){
      this.props.onAddPlace(this.state.placeName);
    }
  }

  render() {
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <HeadingfText style={{marginBottom: 20}} >Share a Place with us!</HeadingfText>
        <PickImage />
        <PickLocation />
        <PlaceInput 
          placeName={this.state.placeName} 
          onChangeText={this.placeNameChangeHandler}
        />
        <View style={styles.button}>
          <Button title="Share the place!" onPress={this.placeAddedHandler}/>
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
    alignItems: "center",
    paddingTop: 50  
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