import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Button,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import storage from "@react-native-async-storage/async-storage";

const win = Dimensions.get("window");

function ShowProfileScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [books, setBooks] = useState("");
  const [friends, setFriends] = useState("");
  const [awards, setAwards] = useState([]);

  const images = {
    badge: require("../../assets/awards/badge.png"),
    patch: require("../../assets/awards/patch.png"),
    trophy: require("../../assets/awards/trophy.png"),
  };

  useEffect(() => {
    async function intro() {
      const user = await storage.getItem("username");
      setUsername(user);

      const biography = await storage.getItem("bio");
      setBio(biography);

      const bookCount = await storage.getItem("books");
      setBooks(bookCount);

      const friendCount = await storage.getItem("friends");
      setFriends(friendCount);

      const awardNames = await storage.getItem("awards");
      const awardNamesParsed = JSON.parse(awardNames);
      setAwards(awardNamesParsed);
    }

    const unsubscribe = navigation.addListener("focus", () => {
      intro();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{ height: 200, marginBottom: 10 }}>
        <View style={styles.profileTop}>
          <View style={styles.leftContainer}></View>
          <View style={styles.rightContainer}></View>
          <View style={styles.imgContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/profilePic.png")}
                style={[styles.img]}
              />
              <View style={{ marginLeft: 15, marginTop: 15 }}>
                <Text
                  style={{ color: "#614600", marginBottom: 10, fontSize: 18 }}
                >
                  @{username}
                </Text>
                <Pressable
                  style={{
                    backgroundColor: "#A73918",
                    padding: 5,
                    alignSelf: "flex-start",
                  }}
                  onPress={() => {
                    navigation.navigate("EditProfile");
                  }}
                >
                  <Text style={{ color: "#D29B0C", fontSize: 18 }}>
                    Edit Profile
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginLeft: 20, marginBottom: 30 }}>
        <Text style={{ fontSize: 30, color: "#D29B0C" }}>Bio</Text>
        {bio && bio != "" ? (
          <Text style={{ fontSize: 18, color: "#D29B0C" }}>{bio}</Text>
        ) : (
          <Text style={{ fontSize: 18, color: "#D29B0C" }}>None</Text>
        )}
      </View>

      <View
        style={{
          marginBottom: 30,
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 30, color: "#D29B0C", textAlign: "center" }}>
            {books}
          </Text>
          <Text style={{ fontSize: 18, color: "#D29B0C" }}>Books</Text>
        </View>
        <View
          style={{
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <AntDesign name="plus" size={24} color="#D29B0C" />
        </View>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: 30, color: "#D29B0C", textAlign: "center" }}>
            {friends}
          </Text>
          <Text style={{ fontSize: 18, color: "#D29B0C" }}>Friends</Text>
        </View>
      </View>

      <View style={{ marginLeft: 20, marginBottom: 30 }}>
        <Text style={{ fontSize: 30, color: "#D29B0C" }}>Awards</Text>
        {awards.length > 0 ? (
          <View style={{ flex: 4, flexDirection: "row" }}>
            {awards.map((award, i) => {
              return (
                <View
                  key={`${i}${award}`}
                  style={{ width: "25%", paddingLeft: 2, paddingRight: 5 }}
                >
                  <Image
                    source={images[award]}
                    style={{
                      width: "100%",
                      height: 0,
                      position: "relative",
                      paddingBottom: "100%",
                    }}
                  />
                </View>
              );
            })}
          </View>
        ) : (
          <Text style={{ fontSize: 18, color: "#D29B0C" }}>None</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: win.height,
    backgroundColor: "black",
  },
  profileTop: {
    flex: 1,
    flexDirection: "column",
    width: win.width,
    display: "flex",
    justifyContent: "center",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
  imgContainer: {
    position: "absolute",
    width: win.width,
    height: win.height,
    justifyContent: "center",
    alignItems: "left",
  },
  img: {
    width: 120,
    height: 120,
    marginLeft: 20,
    borderRadius: 100,
  },
});

export default ShowProfileScreen;
