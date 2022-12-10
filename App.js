import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Screens
import Welcome from "./src/screens/welcome/Welcome";
import Login from "./src/screens/login/Login";
import SignUp from "./src/screens/signup/SignUp";
import Messages from "./src/screens/messages/Messages";
import { useCallback, useEffect } from "react";
import Conversation from "./src/screens/conversation/Conversation";

export default function App() {
  let [fontsLoaded] = useFonts({
    "SF-Ultralight": require("./assets/Fonts/SF-UI-Display-Ultralight.ttf"),
    "SF-Light": require("./assets/Fonts/SF-UI-Display-Light.ttf"),
    "SF-Regular": require("./assets/Fonts/SF-UI-Display-Regular.ttf"),
    "SF-Medium": require("./assets/Fonts/SF-UI-Display-Medium.ttf"),
    "SF-Bold": require("./assets/Fonts/SF-UI-Display-Bold.ttf"),
    "SF-Semibold": require("./assets/Fonts/SF-UI-Display-Semibold.ttf"),
    "SF-Heavy": require("./assets/Fonts/SF-UI-Display-Heavy.ttf"),
    "SF-Black": require("./assets/Fonts/SF-UI-Display-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createStackNavigator();
  const screens = [
    {
      screen: Welcome,
      title: "welcomeScreen",
    },
    {
      screen: Login,
      title: "loginScreen",
    },
    {
      screen: SignUp,
      title: "signUpScreen",
    },
    {
      screen: Messages,
      title: "messagesScreen",
    },
    {
      screen: Conversation,
      title: `conversationScreen`,
    },
  ];

  return (
    <NavigationContainer>
      <SafeAreaProvider
        onLayout={onLayoutRootView}
        style={{ backgroundColor: "#FDFDFD" }}
      >
        <Stack.Navigator>
          {screens.map((screen, index) => (
            <Stack.Screen
              key={index}
              name={screen.title}
              component={screen.screen}
              options={{
                headerShown: false,
              }}
            />
          ))}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
