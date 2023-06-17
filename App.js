import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import storage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

import welcomeScreen from "./screens/WelcomScreen";
import Navigation from "./navigation";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  const [route, setRoute] = useState(true);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //Display "WelcomScreen" page if user's first time on app. Otherwise, navigate to the "Home" page
  const makeRequest = async () => {
    storage.getItem("firsttime").then((item) => {
      if (item) {
        setRoute("WelcomScreen");
      } else {
        setRoute("WelcomScreen");
      }
    });
  };

  //Check whether update is available for app. If so, automatically update the app.
  const checkUpdate = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Updates.reloadAsync();
      }
    } catch (e) {}
  };

  useEffect(() => {
    checkUpdate();
    makeRequest();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      //Create a Navigation Stack between Tabs and "FirstScreen"
      <SafeAreaProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName={route}>
            <Stack.Screen
              name="WelcomScreen"
              options={{ headerShown: false }}
              component={welcomeScreen}
            />
            <Stack.Screen
              name="Tabs"
              initialParams={{ colorScheme: colorScheme }}
              options={{ headerShown: false }}
              component={Navigation}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
