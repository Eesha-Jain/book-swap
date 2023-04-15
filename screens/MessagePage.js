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
        <Text style={styles.startingText}>
          Contact +1(800)859-5339 to begin talking!
        </Text>
        <Text style={styles.largerText}>It's a match!</Text>
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
    alignItems: "center",
    backgroundColor: "D4D4D4",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 80,
    width: "90%",
  },
  largerText: {
    fontSize: 22,
    fontFamily: "Inter",
    alignText: "center",
    marginBottom: 70,
  },
  startingText: {
    fontSize: 15,
    fontFamily: "Inter-Bold",
    alignText: "center",
    marginBottom: 120,
  },
});

export default messagePage;
