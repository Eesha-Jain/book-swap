import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerItems from "./DrawerItems";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import LibraryScreen from "../screens/Library";
import MessagePageScreen from "../screens/MessagePage";
import PreferencesScreen from "../screens/Preferences";
import HelpScreen from "../screens/Help";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Profile"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#7A3030",
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#7A3030",
        },
        headerTintColor: "#D29B0C",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#D29B0C",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      {DrawerItems.map((drawer) => (
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
            drawerIcon: ({ focused }) =>
              drawer.iconType === "Ionicons" ? (
                <Ionicons
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "white" : "#D29B0C"}
                />
              ) : drawer.iconType === "AntDesign" ? (
                <AntDesign
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "white" : "#D29B0C"}
                />
              ) : (
                <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "white" : "#D29B0C"}
                />
              ),
          }}
          component={
            drawer.name === "Home"
              ? BottomTabNavigator
              : drawer.name === "Library"
              ? LibraryScreen
              : drawer.name === "Messages"
              ? MessagePageScreen
              : drawer.name === "Preferences"
              ? PreferencesScreen
              : HelpScreen
          }
        />
      ))}
    </Drawer.Navigator>
  );
}
