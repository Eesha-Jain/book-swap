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
      <Pressable
        style={[
          styles.button,
          {
            marginTop: 10,
          },
        ]}
        onPress={() => {
       navigate("Menu");
      }}
      >
      </Pressable>;
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: win.height,
  },
  button: {
    backgroundColor: "#a91239",
    padding: 10,
  }
});

export default messagePage;
