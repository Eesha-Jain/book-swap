import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const win = Dimensions.get("window");

function SwipingPage({ navigation: { navigate } }) {
  const books = [
    {
      img: require("../assets/Books/USHistory.png"),
      title: "Unfinished Nation",
      author: "Brinkley",
      condition: "Used",
    },
    {
      img: require("../assets/Books/Chemistry.png"),
      title: "Chemistry",
      author: "Zumdahl",
      condition: "Used",
    },
    {
      img: require("../assets/Books/advancedChem.jpg"),
      title: "Advanced Chemistry",
      author: "Clugston",
      condition: "Used",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Swap Book</Text>
          <Image
            source={books[index].img}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <Text style={{ textAlign: "center", color: "#D29B0C", fontSize: 16 }}>
            Title: {books[index].title}
          </Text>
          <Text style={{ textAlign: "center", color: "#D29B0C", fontSize: 16 }}>
            Author: {books[index].author}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "#D29B0C",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Condition: {books[index].condition}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                marginTop: 20,
                opacity: index != 0 ? 1 : 0,
              }}
              onPress={() => {
                setIndex(index - 1);
              }}
            >
              <Ionicons
                name="arrow-back-circle"
                size={24}
                color="#A73918"
                style={{ alignSelf: "center" }}
              />
              <Text
                style={{
                  color: "#A73918",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Previous
              </Text>
            </Pressable>

            <Pressable
              style={{
                marginTop: 20,
                alignSelf: "flex-start",
              }}
              onPress={() => {
                navigate("Messages");
              }}
            >
              <Ionicons
                name="heart-circle"
                size={24}
                color="#A73918"
                style={{ alignSelf: "center" }}
              />
              <Text
                style={{
                  color: "#A73918",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Like!
              </Text>
            </Pressable>

            <Pressable
              style={{
                marginTop: 20,
                alignSelf: "flex-end",
                opacity: (index != books.length - 1) != 0 ? 1 : 0,
              }}
              onPress={() => {
                setIndex(index + 1);
              }}
            >
              <Ionicons
                name="arrow-forward-circle"
                size={24}
                color="#A73918"
                style={{ alignSelf: "center" }}
              />
              <Text
                style={{
                  color: "#A73918",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Forward
              </Text>
            </Pressable>
          </View>
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
    backgroundColor: "black",
    height: win.height,
    fontFamily: "Inter",
  },
  innerContainer: {
    padding: 30,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "black",
    width: win.width,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#D29B0C",
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
