import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";

const win = Dimensions.get("window");

function Profile(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: win.height,
  },
});

export default Profile;
