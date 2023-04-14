/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { View } from "react-native";

import TabOneScreen from "../screens/Preferences";
import TabTwoScreen from "../screens/AddBooks";
import TabThreeScreen from "../screens/Profile";
import TabFiveScreen from "../screens/SwipingPage";
import TabSixScreen from "../screens/MessagePage";
import TabEightScreen from "../screens/Library";

const BottomTab = createBottomTabNavigator();

//Stack Navigation for Bottom Tabs
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="ProfileScreen"
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
        name="ProfileScreen"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: "Profile",
        }}
      />
      <BottomTab.Screen
        name="SwipingScreen"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="swipe" size={24} color={color} />
          ),
          headerShown: false,
          tabBarLabel: "Swipe",
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
        name="Profile"
        component={TabThreeScreen}
        options={{ headerTitle: "Profile", headerShown: false }}
      />
    </TabThreeStack.Navigator>
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
