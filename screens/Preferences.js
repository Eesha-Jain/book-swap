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
import { TextInput } from "react-native-gesture-handler";

const win = Dimensions.get("window");
//let nonFiction=false;
//let fiction=false;
//let textBook= false;
function Preferences({ navigation: { navigate } }, props) {
  //what book type you want vareriables
  const [nonFiction, setNonFiction] = useState(false);
  const [textBook, setTextBook] = useState(false);
  const [fiction, setFiction] = useState(false);
//what condition you want book to be in variables 
  const [damaged, setDamaged] = useState(false)
  const [used, setUsed] = useState(false)
  const [perfect, setperfect] = useState(false)


  return (
    <View style={[styles.container, styles.flex]}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Preferences</Text>

        <Text>Type of Books:</Text>
      
      <Button
        //Non-Fiction Preference
        onPress={() => {
          setNonFiction((current) => !current);
        }}
        //disabled={!nonFiction}
        title={nonFiction ? "Non-Fiction" : "Non-Fiction Selected"}
        
      />

      <Button
        //Fiction Preference
        onPress={() => {
          setFiction((current) => !current);
        }}
        //disabled={!fiction}
        title={fiction ? "Fiction" : "Fiction Selected"}
        
      />

      <Button
        //TextBook Preference
        onPress={() => {
          setTextBook((current) => !current);
        }}
        //disabled={!textBook}
        title={textBook ? "Textbooks" : "Textbooks Selected"}
        />
        <Text>What condition do you want the books to be in?</Text>
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
          borderColor: 'red',
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

export default Preferences;
