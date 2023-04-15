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
      <View style={styles.box}>
        <Text style={styles.text}>
          Begin Messaging
        </Text>
      </View>
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
  },
  box: {
    alignItems:"center",
    backgroundColor: "D4D4D4",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginBottom: 15,
    width: "90%",
  },
  text: {
    fontSize: 8,
    fontFamily: "Inter",
    marginBottom: 16,
  },
});

export default messagePage;
