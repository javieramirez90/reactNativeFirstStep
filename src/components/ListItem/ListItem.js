import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const ListItem = (props) => (
  
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem} >
      <Image resizeMode="contain" style={styles.placeImage} source={props.placeImage}/>
      <Text>{ props.placeName }</Text>
    </View>
  </TouchableOpacity>
)

  const styles = StyleSheet.create({
    listItem: {
      width: "100%",
      marginBottom: 5,
      padding: 10,
      backgroundColor: "white",
      flexDirection: "row",
      alignItems: "center"
    },
    placeImage: {
      marginRight: 8,
      width: 35,
      height: 15
    }
  });


export default ListItem;