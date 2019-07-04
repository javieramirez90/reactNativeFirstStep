/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native'; 

import ListItem from './src/components/ListItem/ListItem'
import InputItem from './src/components/InpuItem/InputItem'
import List from './src/components/List/List'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {

  state = {
    placeName : '',
    places : []
  }


  placeNameChangedHandler = val => {
    console.log(val)
     this.setState({
       placeName: val 
     });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName : ""
      };
    });
  };

  render() {

    const  placesOutput = this.state.places.map((place, index) => (
      <ListItem key={index}  placeName={ place }/>
    ));

    return (
      <View style={styles.container}>
        <InputItem 
          placeName={this.state.placeName} 
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <List 
          placesOutput={placesOutput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
