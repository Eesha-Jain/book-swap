import React, { Component, useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import storage from "@react-native-async-storage/async-storage";
import PhoneInput from "react-native-phone-number-input";

const win = Dimensions.get("window");

function EditProfileScreen({ navigation: { navigate } }) {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState(null);
  const phoneInput = useRef(null);

  async function saveValues() {
    await storage.setItem("username", username);
    await storage.setItem("bio", bio);
    await storage.setItem("phone", phone);

    navigate("ShowProfile");
  }

  useEffect(() => {
    async function intro() {
      const user = await storage.getItem("username");
      setUsername(user);

      const biography = (await storage.getItem("bio")) ?? "";
      setBio(biography);

      const phoneNumber = (await storage.getItem("phone")) ?? "";
      setPhone(phoneNumber);
    }

    intro();
  }, []);

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
              <View style={{ marginLeft: 15, marginTop: 5 }}>
                <Text
                  style={{ color: "#614600", marginBottom: 10, fontSize: 18 }}
                >
                  Edit Username:
                </Text>
                <TextInput
                  placeholder="Username"
                  style={{ color: "#D29B0C", fontSize: 18 }}
                  onChangeText={setUsername}
                  value={username}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginLeft: 20, marginBottom: 30 }}>
        <Text style={{ fontSize: 30, color: "#D29B0C" }}>Bio</Text>
        <TextInput
          placeholder="Type here..."
          placeholderTextColor="#D29B0C"
          style={{ color: "#D29B0C", fontSize: 18 }}
          onChangeText={setBio}
          value={bio}
        />
      </View>

      <View style={{ marginLeft: 20, marginBottom: 30 }}>
        <Text style={{ fontSize: 30, color: "#D29B0C" }}>Phone #</Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phone}
          defaultCode="US"
          codeTextStyle={{ color: "#D29B0C", fontSize: 18 }}
          textInputStyle={{ color: "#D29B0C", fontSize: 18 }}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#D29B0C",
          }}
          textContainerStyle={{
            backgroundColor: "transparent",
            borderLeftWidth: 1,
            borderColor: "#D29B0C",
          }}
          onChangeFormattedText={(text) => {
            setPhone(text);
          }}
          withDarkTheme
          withShadow
        />
      </View>

      <View style={{ padding: 20 }}>
        <Pressable
          style={{
            backgroundColor: "#A73918",
            padding: 5,
            width: "100%",
            borderRadius: 50,
            alignSelf: "flex-start",
          }}
          onPress={saveValues}
        >
          <Text style={{ color: "#D29B0C", fontSize: 18, textAlign: "center" }}>
            Save Changes
          </Text>
        </Pressable>
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

export default EditProfileScreen;
