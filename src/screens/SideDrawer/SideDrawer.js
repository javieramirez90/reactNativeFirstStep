import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  render() {
    return (
      <View style={[ styles.container,
        { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity>
          <View style={styles.drawerItem}>
            <Icon 
              style={styles.drawerItemIcon} 
              name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
              size={30} 
              color="#bbb"
            />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  };
};

export default SideDrawer;

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 30,
  backgroundColor: "white"
},
drawerItem: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#eee",
  padding: 10
},
drawerItemIcon: {
  marginRight: 10
}
});