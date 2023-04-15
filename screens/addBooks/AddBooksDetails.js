import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App({ navigation: { navigate } }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");

  const handleAddBook = () => {
    // Here you can add the logic to save the book information to a bookshelf or database
    console.log(`Added book: ${title} by ${author} (${condition})`);
    // Clear the inputs after adding the book
    setTitle("");
    setAuthor("");
    setCondition("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Book to Your Bookshelf</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Condition"
        value={condition}
        onChangeText={setCondition}
      />
      <Button title="Add Book" onPress={handleAddBook} />
      <Button
        title="Navigate"
        onPress={() => {
          navigate("Camera");
        }}
      />
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
