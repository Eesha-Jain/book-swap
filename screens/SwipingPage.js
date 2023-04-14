import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const win = Dimensions.get("window");

function swipingPage({ navigation: { navigate } }, props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView>
          <Text style={styles.header}>Books that fit your preferences</Text>

          <TouchableOpacity
            onPress={() => {
              navigate("MessagePage");
            }}
          >
            <Image
              source={require("../assets/Books/MicrosoftTeams-image (4).png")}
              style={{ width: 100, height: 150 }}
            />
          </TouchableOpacity>
          <Text>Unfinished Nation, History, Used</Text>

          <TouchableOpacity
            onPress={() => {
              navigate("MessagePage");
            }}
          >
            <Image
              source={require("../assets/Books/MicrosoftTeams-image (5).png")}
              style={{ width: 100, height: 150 }}
            />
          </TouchableOpacity>
          <Text>Chemistry, Chemistry, Used</Text>


        </ScrollView>
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
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Inter-Bold",
  },
  button: {
    backgroundColor: "red",
    padding: 11,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    width: 120,
    height: 120,
  },
});

export default swipingPage;
