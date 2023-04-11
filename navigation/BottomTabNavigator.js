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
      initialRouteName="ShowProfileScreen"
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
        name="PreferencesScreen"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: "Preferences",
        }}
      />
      <BottomTab.Screen
        name="AddBookScreen"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: "Add Book",
        }}
      />
      <BottomTab.Screen
        name="ShowProfileScreen"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: "Show Profile",
        }}
      />
      <BottomTab.Screen
        name="SwipingScreen"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: "Swipe",
        }}
      />

      <BottomTab.Screen
        name="MessgaePage"
        component={TabSixNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: "Messages",
        }}
      />

      <BottomTab.Screen
        name="Menu"
        component={TabSevenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <BottomTab.Screen
        name="Library"
        component={TabEightNavigator}
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

function TabFiveNavigator() {
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

const TabSixStack = createStackNavigator();
function TabSixNavigator() {
  return (
    <TabSixStack.Navigator>
      <TabSixStack.Screen
        name="MessagePage"
        component={TabSixScreen}
        options={{ headerTitle: "MessagePage", headerShown: false }}
      />
    </TabSixStack.Navigator>
  );
}

const TabSevenStack = createStackNavigator();
function TabSevenNavigator() {
  return (
    <TabSevenStack.Navigator>
      <TabSevenStack.Screen
        name="Menue"
        component={TabSevenScreen}
        options={{ headerTitle: "Menue", headerShown: false }}
      />
    </TabSevenStack.Navigator>
  );
}

const TabEightStack = createStackNavigator();
function TabEightNavigator() {
  return (
    <TabEightStack.Navigator>
      <TabEightStack.Screen
        name="Library"
        component={TabEightScreen}
        options={{ headerTitle: "Library", headerShown: false }}
      />
    </TabEightStack.Navigator>
  );
}
