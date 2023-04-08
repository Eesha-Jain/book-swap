import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  useState,
} from "react-native";

const win = Dimensions.get("window");

function Preferences(props) {
  const [nonFiction, fiction, textBook] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Preferences</Text>
      <Text>Type of Books: </Text>
      <Button
        //Non-Fiction Preference
        onPress={() => {
          nonFiction(true);
        }}
        disabled={NonFiction}
        title={NonFiction ? "Non-Fiction Selected" : "Non-Fiction"}
      />

      <Button
        //Fiction Preference
        onPress={() => {
          fiction(true);
        }}
        disabled={fiction}
        title={fiction ? "Fiction Selected" : "Fiction"}
      />

      <Button
        //TextBook Preference
        onPress={() => {
          textBook(true);
        }}
        disabled={textBook}
        title={textBook ? "Textbooks Selected" : "Textbooks"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    height: win.height,
  },
});

export default Preferences;
