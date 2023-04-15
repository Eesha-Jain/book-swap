import React, { Component, useState } from "react";

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  ScrollView,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";

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
  const [perfect, setPerfect] = useState(false);

  return (
    <ScrollView>
      <View style={[styles.container, styles.flex]}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Preferences</Text>

          <Text style={{ fontSize: 16, marginBottom: 10 }}>Book Subjects:</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={Math}
              onValueChange={(newValue) => setMath(newValue)}
              style={styles.checkbox}
              color={Math ? "#A73918" : undefined}
            />
            <Text style={styles.label}>Math</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={English}
              onValueChange={(newValue) => setEnglish(newValue)}
              style={styles.checkbox}
              color={English ? "#A73918" : undefined}
            />
            <Text style={styles.label}>English</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={History}
              onValueChange={(newValue) => setHistory(newValue)}
              style={styles.checkbox}
              color={History ? "#A73918" : undefined}
            />
            <Text style={styles.label}>History</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={Physics}
              onValueChange={(newValue) => setPhysics(newValue)}
              style={styles.checkbox}
              color={Physics ? "#A73918" : undefined}
            />
            <Text style={styles.label}>Physics</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={Chemistry}
              onValueChange={(newValue) => setChemistry(newValue)}
              style={styles.checkbox}
              color={Chemistry ? "#A73918" : undefined}
            />
            <Text style={styles.label}>Chemistry</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={Biology}
              onValueChange={(newValue) => setBiology(newValue)}
              style={styles.checkbox}
              color={Biology ? "#A73918" : undefined}
            />
            <Text style={styles.label}>Biology</Text>
          </View>

          <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
            What condition do you want the textbooks to be in?
          </Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={damaged}
              onValueChange={(newValue) => setDamaged(newValue)}
              style={styles.checkbox}
              color={damaged ? "#A73918" : undefined}
            />
            <Text style={styles.label}>Damaged</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={used}
              onValueChange={(newValue) => setUsed(newValue)}
              style={styles.checkbox}
              color={used ? "#A73918" : undefined}
            />
            <Text style={styles.label}>Used</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={perfect}
              onValueChange={(newValue) => setPerfect(newValue)}
              style={styles.checkbox}
              color={perfect ? "#A73918" : undefined}
            />
            <Text style={styles.label}>Perfect</Text>
          </View>

          <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 10 }}>
            How far do you want to travel? (miles)
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "red",
              borderWidth: 1,
              marginBottom: 30,
            }}
            defaultValue=""
          />
          <Pressable
            style={{
              backgroundColor: "#A73918",
              padding: 5,
              width: "100%",
              borderRadius: 50,
              alignSelf: "flex-start",
            }}
            onPress={() => {
              navigate("AddBook");
            }}
          >
            <Text
              style={{ color: "#D29B0C", fontSize: 18, textAlign: "center" }}
            >
              Save
            </Text>
          </Pressable>
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
    fontFamily: "Inter",
  },
  innerContainer: {
    padding: 30,
    paddingBottom: 0,
    backgroundColor: "white",
    width: win.width,
    height: win.height,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    marginLeft: 10,
    margin: 0,
    padding: 0,
    fontSize: 16,
  },
});

export default Preferences;
