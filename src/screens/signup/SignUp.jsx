import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const naviagtion = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full flex items-center justify-center`}>
      <View>
        <Text
          style={[
            tw`text-center mb-4 flex flex-col items-center justify-center`,
            { fontFamily: "SF-Regular", fontWeight: "500", fontSize: 24 },
          ]}
        >
          Create an account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={tw`pl-4 w-full`}
            placeholder="Enter your name"
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={tw`pl-4 w-full`}
            placeholder="Enter your email"
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={tw`pl-4 w-full`}
            placeholder="Enter your password"
            keyboardType="default"
          />
        </View>
        <TouchableOpacity
          style={tw`relative`}
          onPress={() => naviagtion.navigate("messagesScreen")}
        >
          <Text
            style={[
              tw`text-white p-3 mx-auto text-center w-full absolute mt-10 rounded-full`,
              {
                fontFamily: "SF-Medium",
                fontSize: 19,
                backgroundColor: "#303030",
              },
            ]}
          >
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles?.text}>
            Don you have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => naviagtion.navigate("loginScreen")}
            >
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#303030",
    borderRadius: 100,
    padding: 9,
    marginVertical: 8,
    width: "60%",
  },
  icon: {
    borderRightWidth: 1,
    borderRightColor: "#303030",
    paddingRight: 8,
  },
  text: {
    color: "#9E9F9F",
    fontFamily: "SF-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    color: "#303030",
    fontWeight: "bold",
  },
});
