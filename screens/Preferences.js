import React, { Component, useState } from "react";

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  Button,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const win = Dimensions.get("window");
function Preferences({ navigation: { navigate } }, props) {
  //what book type you want variables
  const [Math, setMath] = useState(false);
  const [English, setEnglish] = useState(false);
  const [History, setHistory] = useState(false);
  const [Physics, setPhysics] = useState(false);
  const [Chemistry, setChemistry] = useState(false);
  const [Biology, setBiology] = useState(false);
  //what condition you want textbook to be in variables
  const [damaged, setDamaged] = useState(false);
  const [used, setUsed] = useState(false);
  const [perfect, setperfect] = useState(false);

  return (
    <View style={[styles.container, styles.flex]}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Subject</Text>

        <Text>Type of Books:</Text>

        <Button
          //Math Preference
          onPress={() => {
            setMath((current) => !current);
          }}
          //disabled={!nonFiction}
          title={Math ? "Math" : "Math Selected"}
        />

        <Button
          //English Preference
          onPress={() => {
            setEnglish((current) => !current);
          }}
          //disabled={!fiction}
          title={English ? "English" : "English Selected"}
        />

        <Button
          //TextBook Preference
          onPress={() => {
            setHistory((current) => !current);
          }}
          //disabled={!textBook}
          title={History ? "History" : "History Selected"}
        />

        <Button
          //English Preference
          onPress={() => {
            setPhysics((current) => !current);
          }}
          title={Physics ? "Physics" : "Physics Selected"}
        />

        <Button
          //English Preference
          onPress={() => {
            setChemistry((current) => !current);
          }}
          title={Chemistry ? "Chemistry" : "Chemistry Selected"}
        />

        <Button
          //English Preference
          onPress={() => {
            setBiology((current) => !current);
          }}
          //disabled={!fiction}
          title={Biology ? "Biology" : "Biology Selected"}
        />

        <Text>What condition do you want the textbooks to be in?</Text>
        <Button
          //want books damaged?
          onPress={() => {
            setDamaged((current) => !current);
          }}
          title={damaged ? "Damaged" : "Damaged Selected"}
        />

        <Button
          onPress={() => {
            setUsed((current) => !current);
          }}
          title={used ? "Used" : "Used Selected"}
        />
        <Button
          onPress={() => {
            setperfect((current) => !current);
          }}
          title={perfect ? "Perfect" : "Perfect Selected"}
        />

        <Text>How far do you want to travel? in miles</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "red",
            borderWidth: 1,
          }}
          defaultValue=""
        />

        <Pressable
          //save button
          style={[
            styles.button,
            {
              marginBottom: 40,
            },
          ]}
          onPress={() => {
            navigate("AddBook");
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
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
    backgroundColor: "#7A3030",
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

export default Preferences;
