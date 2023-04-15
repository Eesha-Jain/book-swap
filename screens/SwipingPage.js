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
          <Image
            source={books[index].img}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Title: {books[index].title}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Subject: {books[index].subject}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, marginBottom: 10 }}>
            Condition: {books[index].condition}
          </Text>
          <Pressable
            style={{
              backgroundColor: "#A73918",
              padding: 10,
              width: "100%",
              borderRadius: 50,
              alignSelf: "flex-start",
            }}
            onPress={() => {
              navigate("Messages");
            }}
          >
            <Text
              style={{ color: "#D29B0C", fontSize: 18, textAlign: "center" }}
            >
              It's a Match! Begin Messaging...
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {index != 0 ? (
              <Pressable
                style={{
                  marginTop: 20,
                  alignSelf: "flex-start",
                }}
                onPress={() => {
                  setIndex(index - 1);
                }}
              >
                <Ionicons name="arrow-back-circle" size={24} color="#A73918" />
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
            ) : (
              <View></View>
            )}

            {index != books.length - 1 && (
              <Pressable
                style={{
                  marginTop: 20,
                  alignSelf: "flex-end",
                }}
                onPress={() => {
                  setIndex(index + 1);
                }}
              >
                <Ionicons
                  name="arrow-forward-circle"
                  size={24}
                  color="#A73918"
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
            )}
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
