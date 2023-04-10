import React, { Component,
  useState
 } from "react";

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Button,
  Pressable,
} from "react-native";

const win = Dimensions.get("window");
let nonFiction=false;
let fiction=false;
let textBook= false;
function Preferences({ navigation: { navigate } }, props) {
  return (
    <View style={styles.container}>
      <Text>Preferences</Text>
      <Text>Type of Books: </Text>
      <Button
        //Non-Fiction Preference
        
        onPress={() => {
          nonFiction=true;
        }}
        disabled={nonFiction}
        title={nonFiction ? "Non-Fiction Selected" : "Non-Fiction"}
        
      />

      <Button
        //Fiction Preference
        onPress={() => {
          fiction=true;
        }}
        disabled={fiction}
        title={fiction ? "Fiction Selected" : "Fiction"}
        
      />

      <Button
        //TextBook Preference
        onPress={() => {
          textBook=true;
        }}
        disabled={textBook}
        title={textBook ? "Textbooks Selected" : "Textbooks"}


        />
        <Pressable
        style={[
          styles.button,
          {
            marginBottom: 40,
          },
        ]}
        onPress={() => {
          navigate("Tabs");
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

      
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

export default Preferences;
