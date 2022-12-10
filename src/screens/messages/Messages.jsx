import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import Message from "../../components/Message/Message";

const Messages = () => {
  const naviagtion = useNavigation();
  const dummyData = [
    {
      id: 1,
      name: "John",
      email: "johndoe@example.com",
      pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      message: {
        text: "You're welcome",
        type: "text",
        time: "9:03",
      },
      isOnline: false,
    },
    {
      id: 2,
      name: "Mouh",
      email: "mouha@example.com",
      pic: "https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg",
      message: {
        text: "Hello there?",
        type: "text",
        time: "8:45",
      },
      isOnline: true,
    },
    {
      id: 3,
      name: "Abdellah",
      email: "Gasama@example.com",
      pic: null,
      message: {
        text: "Okay thank you gasama",
        type: "text",
        time: "8:30",
      },
      isOnline: true,
    },
    {
      id: 4,
      name: "Sanya",
      email: "Gasama@example.com",
      pic: null,
      message: {
        text: "Oh no",
        type: "text",
        time: "8:53",
      },
      isOnline: true,
    },
  ];

  return (
    <SafeAreaProvider>
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
          <TouchableOpacity>
            <Icon
              type="font-awesome"
              color="#303030"
              name="search"
              style={{ fontFamily: "SF-Regular" }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummyData}
          vertical
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              //   onPress={() => naviagtion.navigate(item.screen)}
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
    </SafeAreaProvider>
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
