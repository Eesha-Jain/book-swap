/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { View } from "react-native";

import TabOneScreen from "../screens/Search";
import TabTwoScreen from "../screens/Messages";
import TabThreeScreen from "../screens/Profile";

const BottomTab = createBottomTabNavigator();

//Stack Navigation for Bottom Tabs
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarActiveTintColor: "#D29B0C",
        tabBarInactiveTintColor: "#876305",
        tabBarStyle: {
          position: "absolute",
          display: "flex",
          backgroundColor: "#7A3030",
          borderWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name="Search"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Search"
        component={TabOneScreen}
        options={{ headerTitle: "Search", headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Messages"
        component={TabTwoScreen}
        options={{ headerTitle: "Messages", headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Profile"
        component={TabThreeScreen}
        options={{ headerTitle: "Profile", headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}
