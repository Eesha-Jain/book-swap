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
      <View style={styles.innerContainer}>
       <Text style={styles.largerText}>
          It's a Match!
        </Text>
        <Text style={styles.startingText}>
          Contact +1(800)859-5339 to begin talking!
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
  innerContainer: {
    alignItems: "center",
    width: "85%",
    backgroundColor: "white",
  },
  largerText: {
    fontSize: 33,
    fontFamily: "Inter",
    textAlign: "center",
    marginTop: 70,
  },
  startingText: {
    fontSize: 25,
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginTop: 80,
  },
});

export default messagePage;
