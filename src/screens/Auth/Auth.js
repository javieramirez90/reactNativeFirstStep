import React , { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
          <DefaultInput placeholder="Password" style={[styles.input, {borderColor: "red"}]}/>
          <DefaultInput placeholder="Confirm password" style={styles.input}/>
        </View>
        <Button title="Submit" onPress={this.loginHandler}/>
      </View>
    )
  }
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "60%"
  }, 
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});