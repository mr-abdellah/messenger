import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const naviagtion = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 `}>
        <Text
          style={[
            tw`text-2xl mt-24 mx-auto`,
            { fontFamily: "SF-Medium", color: "#303030" },
          ]}
        >
          What's Up
        </Text>
        <View style={tw`mx-auto mt-20`}>
          <Image
            style={{
              width: 250,
              height: 250,
              resizeMode: "contain",
            }}
            source={require("../../../assets/images/welcome.png")}
          />
        </View>
        <Text
          style={[
            tw`text-center text-gray-400 text-xl mt-3`,
            { fontFamily: "SF-Regular" },
          ]}
        >
          Let's talk with your friends and family wherever and whenever
        </Text>
        <TouchableOpacity
          style={tw`relative w-full`}
          onPress={() => naviagtion.navigate("loginScreen")}
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
            Continue with email
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
