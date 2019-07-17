import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

class SideDrawer extends Component {
  render() {
    return (
      <View style={[ styles.container,
        { width: Dimensions.get("window").width * .5 }
        ]}
      >
        <Text>SideDrawer</Text>
      </View>
    )
  };
};

export default SideDrawer;

const styles = StyleSheet.create({
container: {
  backgroundColor: "green",
  flex: 1
}
});