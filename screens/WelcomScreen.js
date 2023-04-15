import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Pressable,
} from "react-native";
import storage from "@react-native-async-storage/async-storage";
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const win = Dimensions.get("window");

function WelcomeScreen({ navigation: { navigate } }) {
  async function getStarted() {
    let username = uniqueNamesGenerator({
      dictionaries: [adjectives, animals, colors],
      length: 2,
      separator: "-",
    });

    await storage.setItem("username", username);
    await storage.setItem("firsttime", "false");
    await storage.setItem("bio", "");
    await storage.setItem("phone", "");
    await storage.setItem("friends", "0");
    await storage.setItem("books", "0");
    await storage.setItem("awards", JSON.stringify(["badge"]));
    await storage.setItem("libraryPending", JSON.stringify([]));
    await storage.setItem("libraryTraded", JSON.stringify([]));

    navigate("Tabs");
  }

  return (
    <View style={[styles.container, styles.flex]}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Welcome</Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
            marginBottom: 40,
          }}
        />
        <Pressable
          style={[
            styles.button,
            {
              marginBottom: 40,
            },
          ]}
          onPress={getStarted}
        >
          <Text style={styles.buttonText}>Create Profile</Text>
        </Pressable>
        <View style={styles.flex}>
          <Image source={require("../assets/icon.png")} style={styles.image} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#7A3030",
    height: win.height,
    fontFamily: "Inter",
  },
  innerContainer: {
    padding: 30,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "white",
    width: win.width,
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Inter-Bold",
  },
  button: {
    backgroundColor: "#D9D9D9",
    padding: 11,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
  },
  image: {
    width: 120,
    height: 120,
  },
});

export default WelcomeScreen;
