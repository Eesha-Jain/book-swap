import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";

import ShowProfile from "./profile/ShowProfile";
import EditProfile from "./profile/EditProfile";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function Profile(props) {
  return (
    <Stack.Navigator initialRouteName="ShowProfile">
      <Stack.Screen
        name="ShowProfile"
        options={{ headerShown: false }}
        component={ShowProfile}
      />
      <Stack.Screen
        name="EditProfile"
        options={{
          headerShown: false,
        }}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
}

export default Profile;
