import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const naviagtion = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5 `}>
          <Text style={tw`text-2xl mt-24 mx-auto font-medium`}>What's Up</Text>
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
          <Text style={tw`text-center text-gray-400 text-xl mt-3`}>
            Let's talk with your friends and family wherever and whenever
          </Text>
          <TouchableOpacity
            style={tw`relative w-full`}
            onPress={() => naviagtion.navigate('loginScreen')}
          >
            <Text
              style={tw`text-white bg-gray-800 p-3 mx-auto text-center w-full  absolute mt-10 rounded-full`}
            >
              Continue with email
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Welcome;
