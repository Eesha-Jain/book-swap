import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  ScrollView,
} from "react-native";
import storage from "@react-native-async-storage/async-storage";

const win = Dimensions.get("window");

function Library(props) {
  const [pending, setPending] = useState([]);
  const [traded, setTraded] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const pendingList = JSON.parse(await storage.getItem("libraryPending"));
      setPending(pendingList);

      const tradedList = JSON.parse(await storage.getItem("libraryTraded"));
      setTraded(tradedList);
    };

    loadBooks();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Library</Text>

        <Text style={styles.subTitle}>Pending</Text>
        {pending.length > 0 ? (
          <View style={{ height: 250 }}>
            <ScrollView
              style={{ marginBottom: 20 }}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              persistentScrollbar={true}
            >
              {pending.map((information, i) => {
                return (
                  <Image
                    key={`${i}${information.title}`}
                    source={{ uri: information.image }}
                    style={{
                      width: 200,
                      height: 200,
                      marginRight: 20,
                    }}
                  />
                );
              })}
            </ScrollView>
          </View>
        ) : (
          <Text style={{ fontSize: 18, color: "#D29B0C" }}>None</Text>
        )}

        <Text style={styles.subTitle}>Traded</Text>
        {traded.length > 0 ? (
          <View style={{ flex: 4, flexDirection: "row" }}>
            {traded.map((information, i) => {
              return (
                <View
                  key={`${i}${information.title}`}
                  style={{ width: "25%", paddingLeft: 2, paddingRight: 5 }}
                >
                  <Image
                    source={information.image}
                    style={{
                      width: "100%",
                      height: 0,
                      position: "relative",
                      paddingBottom: "100%",
                    }}
                  />
                </View>
              );
            })}
          </View>
        ) : (
          <Text style={{ fontSize: 18, color: "#D29B0C" }}>None</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    height: win.height,
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Inter-Bold",
    color: "#D29B0C",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Inter-Bold",
    color: "#D29B0C",
  },
});

export default Library;
