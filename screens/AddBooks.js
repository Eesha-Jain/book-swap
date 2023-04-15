import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";

import AddBookDetails from "./addBooks/AddBooksDetails";
import Camera from "./addBooks/Camera";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function AddBooks(props) {
  return (
    <Stack.Navigator initialRouteName="AddBookDetails">
      <Stack.Screen
        name="AddBookDetails"
        options={{ headerShown: false }}
        component={AddBookDetails}
      />
      <Stack.Screen
        name="Camera"
        options={{
          headerShown: false,
        }}
        component={Camera}
      />
    </Stack.Navigator>
  );
}

export default AddBooks;
