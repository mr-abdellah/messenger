import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Message from "../../components/Message/Message";
import { dummyData } from "./../../data/users";

const Messages = () => {
  const naviagtion = useNavigation();

  return (
    <SafeAreaView
      style={tw`bg-white h-full flex flex-col items-center justify-start`}
    >
      <View style={styles.topBar}>
        <Text
          style={[
            tw``,
            { fontFamily: "SF-Regular", fontWeight: "500", fontSize: 24 },
          ]}
        >
          Messages
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <FlatList
        data={dummyData}
        vertical
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              naviagtion.navigate("conversationScreen", {
                id: item.id,
              })
            }
            style={tw`px-2 py-1 m-1 w-96`}
          >
            <Message
              key={item.id}
              pic={item.pic}
              name={item.name}
              isOnline={item.isOnline}
              message={item.message}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
  },
});
