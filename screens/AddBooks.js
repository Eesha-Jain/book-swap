import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from "react-native";
import { Icon } from "react-native-elements";

export default function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [condition, setCondition] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <Text style={styles.dropdown}>
          This is where the dropdown will be rendered.
        </Text>
      );
    }
  };

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
      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        {renderDropdown()}
        <Text style={styles.buttonText}>Condition</Text>
        <Icon type="font-awesome" name="chevron-down" />
      </TouchableOpacity>
      <Button title="Add Book" onPress={handleAddBook} />
interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
const DropdownButton = useRef();
const [dropdownTop, setDropdownTop] = useState(0);
  <TouchableOpacity
  ref={DropdownButton}
  style={styles.button}
  onPress={toggleDropdown}
>
    const toggleDropdown = (): void => {
  visible ? setVisible(false) : openDropdown();
};

const openDropdown = (): void => {
  DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
    setDropdownTop(py + h);
  });
  setVisible(true);
};
  const renderItem = ({ item }): ReactElement<any, any> => (
  <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
    <Text>{item.label}</Text>
  </TouchableOpacity>
);
const onItemPress = (item): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };
const [selected, setSelected] = useState(undefined);
<Text style={styles.buttonText}>
  {(selected && selected.label) || label}
</Text>
item: {
  paddingHorizontal: 10,
  paddingVertical: 10,
  borderBottomWidth: 1,
},
  const App: FC = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'Damaged', value: '1' },
    { label: 'Used', value: '2' },
    { label: 'Perfect', value: '3' },
  ];

  return (
    <View style={styles.container}>
      {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )}
      <Dropdown label="Select Item" data={data} onSelect={setSelected} />
      <Text>This is the rest of the form.</Text>
    </View>
  );
};
  },
    );
  };
}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 50,
    width: "90%",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    top: 50,
  },
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
