import React, { FC, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  View,
  TextInput,
  Image,
} from "react-native";
import Dropdown from "../components/Dropdown";
import * as ImagePicker from "expo-image-picker";
import storage from "@react-native-async-storage/async-storage";

export default function App({ navigation: { navigate } }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState(null);

  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: "Damaged", value: "1" },
    { label: "Used", value: "2" },
    { label: "Perfect", value: "3" },
  ];

  const handleAddBook = async () => {
    // Here you can add the logic to save the book information to a bookshelf or database
    const bookArray = JSON.parse(await storage.getItem("library"));
    bookArray.push({
      title: title,
      author: author,
      condition: condition,
      image: image,
    });

    await storage.setItem("library", JSON.stringify(bookArray));

    // Clear the inputs after adding the book
    setTitle("");
    setAuthor("");
    setCondition("");
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add a New Book to Your Library</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <Dropdown label="Select Item" data={data} onSelect={setSelected} />
        <Pressable
          style={{
            padding: 5,
            width: "100%",
            alignSelf: "flex-start",
            marginTop: 10,
          }}
          onPress={pickImage}
        >
          <Text style={{ color: "#A73918", fontSize: 18, textAlign: "center" }}>
            Click to Select Picture of Book
          </Text>
        </Pressable>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Pressable
          style={{
            backgroundColor: "#A73918",
            padding: 5,
            width: "100%",
            borderRadius: 50,
            alignSelf: "flex-start",
            marginTop: 10,
          }}
          onPress={handleAddBook}
        >
          <Text style={{ color: "#D29B0C", fontSize: 18, textAlign: "center" }}>
            Add Book
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
});
