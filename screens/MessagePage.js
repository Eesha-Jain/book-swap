import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import storage from "@react-native-async-storage/async-storage";

const win = Dimensions.get("window");

function MessagePage(props) {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const pendingList = JSON.parse(await storage.getItem("libraryPending"));
      setPending(pendingList);
    };

    loadBooks();
  }, [pending]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.largerText}>It's a Match!</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            source={require("../assets/Books/Chemistry.png")}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
          <Ionicons
            name="heart-circle"
            size={24}
            color="#A73918"
            style={{ alignSelf: "center", margin: 30 }}
          />
          {pending[0] && (
            <Image
              source={{ uri: pending[0].image }}
              style={{
                width: 100,
                height: 100,
                marginRight: 20,
              }}
            />
          )}
        </View>
        <Text style={styles.startingText}>
          Contact +1(800)859-5339 to begin talking!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    height: win.height,
  },
  innerContainer: {
    alignItems: "center",
    width: "85%",
    backgroundColor: "black",
  },
  largerText: {
    fontSize: 33,
    fontFamily: "Inter-Bold",
    textAlign: "center",
    marginTop: 70,
    marginBottom: 30,
    color: "#D29B0C",
  },
  startingText: {
    fontSize: 25,
    fontFamily: "Inter",
    textAlign: "center",
    marginTop: 80,
    color: "#D29B0C",
  },
});

export default MessagePage;
