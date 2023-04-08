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

import TabOneScreen from "../screens/Preferences";
import TabTwoScreen from "../screens/AddBooks";
import TabThreeScreen from "../screens/ShowProfile";
import TabFourScreen from "../screens/EditProfile";
import TabFiveScreen from "../screens/SwipingPage";
import TabSixScreen from "../screens/MessagePage";
import TabSevenScreen from "../screens/Menu";
import TabEightScreen from "../screens/Library";

const BottomTab = createBottomTabNavigator();

//Stack Navigation for Bottom Tabs
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="WelcomeScreen"
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
        name="Preferences"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="AddBook"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="ShowProfile"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
     <BottomTab.Screen
     name="EditProfile"
     component={TabFourNavigator}
     options={{
       tabBarIcon: ({ color }) => (
         <Ionicons name="person-outline" size={24} color={color} />
       ),
       headerShown: false,
     }}
   />

<BottomTab.Screen
     name="SwipingScren"
     component={TabFiveNavigator}
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
        name="Preferences"
        component={TabOneScreen}
        options={{ headerTitle: "Preferences", headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="AddBooks"
        component={TabTwoScreen}
        options={{ headerTitle: "AddBooks", headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="ShowProfile"
        component={TabThreeScreen}
        options={{ headerTitle: "ShowProfile", headerShown: false }}
      />
    </TabThreeStack.Navigator>
  );
}
const TabFourStack = createStackNavigator();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="EditProfile"
        component={TabFourScreen}
        options={{ headerTitle: "EditProfile", headerShown: false }}
      />
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator();

function TabFiveNavigator() {``
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="SwipingPage"
        component={TabFiveScreen}
        options={{ headerTitle: "SwipingPage", headerShown: false }}
      />
    </TabFiveStack.Navigator>
  );
}

