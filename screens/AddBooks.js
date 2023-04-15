import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
} from "react-native";
import Dropdown from "../components/Dropdown";
import * as ImagePicker from "expo-image-picker";

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

  const handleAddBook = () => {
    // Here you can add the logic to save the book information to a bookshelf or database
    console.log(`Added book: ${title} by ${author} (${condition})`);

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

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
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
      <Dropdown label="Condition" data={data} onSelect={setSelected} />
      <Button
        style={{ color: "#D29B0C", marginTop: 20 }}
        title="Take Picture of Book"
        onPress={pickImage}
      />
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
