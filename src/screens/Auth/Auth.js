import React , { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MaintText from '../../components/UI/MainText/MainText';
import ButtonWithBackGround from '../../components/UI/ButtonWithBackGround/ButtonWithBackGround';

import backgroundImage from '../../assets/background.jpg';

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs();
  }

  render(){
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MaintText>
            <HeadingText>Please Log In MF</HeadingText>
          </MaintText>
          <ButtonWithBackGround color="#29aaf4" onPress={this.loginHandler} >Switch to Login</ButtonWithBackGround>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input}/>
            <DefaultInput placeholder="Password" style={[styles.input, {borderColor: "red"}]}/>
            <DefaultInput placeholder="Confirm password" style={styles.input}/>
          </View>
          <ButtonWithBackGround color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackGround>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});