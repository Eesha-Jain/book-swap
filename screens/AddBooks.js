import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";

const win = Dimensions.get("window");

<<<<<<<< HEAD:screens/AddBooks.js
function addBooks(props) {
========
function Preferences(props) {
>>>>>>>> 652edfba19a42bf309cd2259299c647a173fba11:screens/Preferences.js
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: win.height,
  },
});

<<<<<<<< HEAD:screens/AddBooks.js
export default addBooks;
========
export default Preferences;
>>>>>>>> 652edfba19a42bf309cd2259299c647a173fba11:screens/Preferences.js
