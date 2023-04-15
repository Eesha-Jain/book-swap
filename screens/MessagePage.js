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

function MessagePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.largerText}>It's a Match!</Text>
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
    backgroundColor: "black",
    height: win.height,
  },
  innerContainer: {
    alignItems: "center",
    width: "85%",
    backgroundColor: "black",
  },
  largerText: {
    fontSize: 33,
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginTop: 70,
    color: "#D29B0C",
  },
  startingText: {
    fontSize: 25,
    fontFamily: "Inter",
    textAlign: "center",
    marginTop: 80,
    color: "#D29B0C",
  },
});

export default MessagePage;
