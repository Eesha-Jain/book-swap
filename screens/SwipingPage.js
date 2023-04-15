import React, { Component, useState } from "react";
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

function SwipingPage({ navigation: { navigate } }, props) {
  const books = [
    {
      img: require("../assets/Books/USHistory.png"),
      title: "Unfinished Nation",
      subject: "History",
      condition: "Used",
    },
    {
      img: require("../assets/Books/Chemistry.png"),
      title: "Chemistry",
      subject: "Chemistry",
      condition: "Used",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Swap Book</Text>

          <TouchableOpacity
            onPress={() => {
              navigate("Messages");
            }}
          >
            <Image
              source={books[index].img}
              style={{
                width: 200,
                height: 300,
                alignSelf: "center",
                marginBottom: 20,
              }}
            />
          </TouchableOpacity>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Title: {books[index].title}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Subject: {books[index].subject}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Condition: {books[index].condition}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
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

export default SwipingPage;
