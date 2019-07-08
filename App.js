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
import List from './src/components/List/List';
import PlaceDetail  from './src/components/PlaceDetail/PlaceDetail';


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
    places : [],
    selectedPlace: null

  }


  placeNameChangedHandler = val => {
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
        places: prevState.places.concat({
          key: Math.random(),
          name: prevState.placeName,
          image: {
            uri: "https://us-east.manta.joyent.com/condenast/public/cnt-services/production/2016/01/14/5698079f78d099fc122488c6_Trunk-Bay-St-John-cr-alamy.jpg"
          }
        }),
        placeName : ""
      };
    });
  };

  placeDeleteHandler = index => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== index;
        })
      }
    });
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key;
        })
      }
    })
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    });
  }

  modalClosedHandler= () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace ={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <InputItem 
          placeName={this.state.placeName} 
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <List 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler}
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
