import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Pressable,
} from "react-native";

const win = Dimensions.get("window");

function messagePage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.startingText}>
          It's a match! Feel free to begin arranging details of the swap!
        </Text>
      <View style={styles.box}>
        <Text style={styles.text}>
          Begin Messaging
        </Text>
      </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: win.height,
  },
  box: {
    alignItems:"center",
    backgroundColor: "D4D4D4",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 80,
    width: "90%",
  },
  text: {
    fontSize: 12,
    fontFamily: "Inter",
    marginBottom: 80,
  },
  startingText: {
    fontSize: 15,
    fontFamily: "Inter-Bold",
    alignText: "center",
    marginBottom: 50,
  },
});

export default messagePage;
