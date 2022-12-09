import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/screens/welcome/Welcome";
import Login from './src/screens/login/Login';
import SignUp from "./src/screens/signup/SignUp";

export default function App() {
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
    }
  ];

  return (
    <NavigationContainer>
      <SafeAreaProvider>
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
